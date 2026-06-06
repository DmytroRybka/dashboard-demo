import { trackEvent } from '../utils/analytics';

interface NavbarProps {
  onBuyClick: () => void;
}

export default function Navbar({ onBuyClick }: NavbarProps) {
  const handleBuy = () => {
    trackEvent('cta_click', { location: 'navbar', type: 'buy_now' });
    onBuyClick();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
          </div>
          <span className="font-bold text-slate-800">PeekProof</span>
        </div>
        <div className="hidden sm:flex items-center gap-8 text-sm text-slate-600">
          <a href="#how-it-works" className="hover:text-slate-800 transition-colors">How it works</a>
          <a href="#reviews" className="hover:text-slate-800 transition-colors">Reviews</a>
          <a href="#pricing" className="hover:text-slate-800 transition-colors">Pricing</a>
        </div>
        <button
          onClick={handleBuy}
          className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
        >
          Buy now
        </button>
      </div>
    </nav>
  );
}
