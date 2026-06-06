import { trackEvent } from '../utils/analytics';

interface PricingSectionProps {
  onReserve: () => void;
}

const plans = [
  {
    name: 'Basic',
    price: '€49',
    description: 'One device for a single window',
    features: ['Window open detection', 'Glass vibration sensor', 'Built-in alarm', '12-month battery'],
    highlighted: false,
  },
  {
    name: 'Family',
    price: '€79',
    badge: 'Best seller',
    description: 'Two devices to cover more rooms',
    features: [
      'Everything in Basic',
      '2 devices included',
      'Phone notifications',
      'Most popular choice',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '€99',
    description: 'Full coverage for the whole family',
    features: [
      'Everything in Family',
      '3 devices included',
      'Proximity detection',
      'Travel pouch included',
    ],
    highlighted: false,
  },
];

export default function PricingSection({ onReserve }: PricingSectionProps) {
  const handleBuy = (plan: string) => {
    trackEvent('add_to_cart_click', { plan });
    onReserve();
  };

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-4">
          Choose your package
        </h2>
        <p className="text-slate-500 text-center mb-14 max-w-xl mx-auto">
          Free shipping in the EU. 30-day money-back guarantee on all orders.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col relative ${
                plan.highlighted
                  ? 'bg-sky-500 text-white shadow-xl shadow-sky-500/25 scale-105'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1 rounded-full shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}
              <h3
                className={`text-lg font-semibold mb-1 ${
                  plan.highlighted ? 'text-sky-100' : 'text-slate-500'
                }`}
              >
                {plan.name}
              </h3>
              <div className="flex items-baseline gap-1 mb-2">
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-800'}`}>
                  {plan.price}
                </span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlighted ? 'text-sky-100' : 'text-slate-500'}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <svg
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? 'text-sky-200' : 'text-sky-500'
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? 'text-white' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleBuy(plan.name)}
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-white text-sky-600 hover:bg-sky-50'
                    : 'bg-sky-500 text-white hover:bg-sky-600'
                }`}
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
