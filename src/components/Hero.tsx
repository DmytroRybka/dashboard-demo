import { trackEvent } from '../utils/analytics';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const handleBuy = () => {
    trackEvent('cta_click', { location: 'hero', type: 'buy_now' });
    onCtaClick();
  };

  const handleSecondary = () => {
    trackEvent('cta_click', { location: 'hero', type: 'see_how_it_works' });
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-b from-sky-50 via-sky-50/50 to-white pt-28 pb-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          Rated 4.8/5 by 2,400+ parents
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6">
          Keep your kids safe near any window, anywhere
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 mb-4 max-w-2xl mx-auto leading-relaxed">
          A tiny device that sticks to any hotel or Airbnb window and alerts you
          instantly if your child opens it, touches it, or gets too close.
        </p>
        <p className="text-sm text-slate-400 mb-10">Starting from €49 · Free shipping in the EU</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <button
            onClick={handleBuy}
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition-colors shadow-lg shadow-sky-500/25"
          >
            Buy now
          </button>
          <button
            onClick={handleSecondary}
            className="border-2 border-sky-300 text-sky-600 hover:bg-sky-50 font-semibold px-8 py-3.5 rounded-xl text-lg transition-colors"
          >
            See how it works
          </button>
        </div>

        <div className="max-w-lg mx-auto bg-gradient-to-br from-sky-100 to-blue-50 rounded-3xl p-10 shadow-sm">
          <div className="relative flex items-center justify-center">
            <svg className="w-48 h-32 text-sky-200" viewBox="0 0 200 140" fill="none">
              <rect x="20" y="10" width="160" height="120" rx="4" stroke="currentColor" strokeWidth="3" />
              <line x1="100" y1="10" x2="100" y2="130" stroke="currentColor" strokeWidth="2" />
              <line x1="20" y1="70" x2="180" y2="70" stroke="currentColor" strokeWidth="2" />
            </svg>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-14 h-14 bg-white rounded-2xl shadow-lg flex items-center justify-center border border-sky-200">
                <svg className="w-7 h-7 text-sky-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-6">
            Sticks to any window in seconds — completely child-safe
          </p>
        </div>
      </div>
    </section>
  );
}
