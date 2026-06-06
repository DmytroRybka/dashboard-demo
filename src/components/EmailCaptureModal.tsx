import { useState } from 'react';
import type { EarlyAccessSubmission } from '../types';
import { saveSubmission } from '../utils/storage';
import { trackEvent } from '../utils/analytics';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const useCaseOptions: { value: EarlyAccessSubmission['useCase']; label: string }[] = [
  { value: 'hotel', label: 'Hotel' },
  { value: 'airbnb', label: 'Airbnb' },
  { value: 'child-room', label: 'Child room' },
  { value: 'other', label: 'Other' },
];

const priceOptions: { value: EarlyAccessSubmission['preferredPrice']; label: string }[] = [
  { value: '€49', label: '€49 Basic' },
  { value: '€79', label: '€79 Family' },
  { value: '€99', label: '€99 Premium' },
  { value: 'not-sure', label: 'Not sure yet' },
];

type ModalStep = 'out-of-stock' | 'notify-form' | 'submitted';

export default function EmailCaptureModal({ isOpen, onClose }: EmailCaptureModalProps) {
  const [step, setStep] = useState<ModalStep>('out-of-stock');
  const [email, setEmail] = useState('');
  const [useCase, setUseCase] = useState<EarlyAccessSubmission['useCase']>('hotel');
  const [preferredPrice, setPreferredPrice] = useState<EarlyAccessSubmission['preferredPrice']>('not-sure');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmed = email.trim();
    if (!trimmed) {
      setError('Please enter your email address.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError('Please enter a valid email address.');
      return;
    }

    const submission: EarlyAccessSubmission = {
      email: trimmed,
      useCase,
      preferredPrice,
      submittedAt: new Date().toISOString(),
    };

    saveSubmission(submission);
    trackEvent('restock_notify_signup', { useCase, preferredPrice });
    setStep('submitted');
  };

  const handleClose = () => {
    setStep('out-of-stock');
    setEmail('');
    setUseCase('hotel');
    setPreferredPrice('not-sure');
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 'out-of-stock' && (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">Sorry, we're sold out</h3>
            <p className="text-slate-600 mb-2">
              WindowGuard is currently out of stock due to high demand.
            </p>
            <p className="text-slate-500 text-sm mb-8">
              We're producing more units as fast as we can. Expected restock: 4–6 weeks.
            </p>
            <button
              onClick={() => {
                trackEvent('notify_click_from_oos');
                setStep('notify-form');
              }}
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-sky-500/25 mb-3"
            >
              Notify me when available
            </button>
            <button
              onClick={handleClose}
              className="w-full text-slate-500 hover:text-slate-700 font-medium py-2 transition-colors text-sm"
            >
              No thanks
            </button>
          </div>
        )}

        {step === 'notify-form' && (
          <>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Get notified when back in stock</h3>
            <p className="text-slate-500 mb-6">
              We'll send you one email the moment WindowGuard is available again.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-shadow"
                />
                {error && <p className="text-red-500 text-sm mt-1.5">{error}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  What will you use it for?
                </label>
                <div className="flex flex-wrap gap-2">
                  {useCaseOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setUseCase(opt.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        useCase === opt.value
                          ? 'bg-sky-500 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Which package are you interested in?
                </label>
                <div className="flex flex-wrap gap-2">
                  {priceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setPreferredPrice(opt.value)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        preferredPrice === opt.value
                          ? 'bg-sky-500 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-sky-500/25"
              >
                Notify me
              </button>
            </form>
          </>
        )}

        {step === 'submitted' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">You're on the list!</h3>
            <p className="text-slate-600">
              Thanks! We'll email you as soon as WindowGuard is back in stock.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
