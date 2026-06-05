import { useState } from 'react';

const faqs = [
  {
    question: 'Is this a real product?',
    answer:
      'This is an early validation page. The product is not available yet. We are gauging interest to decide whether to bring WindowGuard to market. Your signup helps us understand demand.',
  },
  {
    question: 'Does it use a camera?',
    answer:
      'No. WindowGuard is privacy-first — it uses vibration and magnetic sensors only. There is no camera, no microphone, and no video recording of any kind.',
  },
  {
    question: 'Does it need hotel Wi-Fi?',
    answer:
      'No. The device works completely standalone with a built-in alarm. Phone notifications use Bluetooth to connect to your phone — no Wi-Fi or internet connection required.',
  },
  {
    question: 'Is it safe for children?',
    answer:
      'Yes. The device is small, has no sharp edges, and attaches securely to glass with industrial-grade suction cups. It is designed to be out of reach when mounted on a window.',
  },
  {
    question: 'When will it launch?',
    answer:
      'We are currently validating demand. If there is enough interest, we plan to start production in 2026. Early access subscribers will be the first to know.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-14">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={faq.question} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-medium text-slate-800">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-slate-400 flex-shrink-0 ml-4 transition-transform ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-slate-600 leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
