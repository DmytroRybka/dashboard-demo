const steps = [
  {
    number: 1,
    title: 'Attach to window',
    description: 'Press the suction cups onto any glass surface. Takes under 5 seconds.',
  },
  {
    number: 2,
    title: 'Press to arm',
    description: 'One button press activates all sensors. A soft LED confirms it\'s armed.',
  },
  {
    number: 3,
    title: 'Sleep with peace of mind',
    description: 'Go to sleep knowing every window is monitored. No app setup required.',
  },
  {
    number: 4,
    title: 'Instant alert',
    description: 'If something happens, you get a loud alarm and phone notification immediately.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-4">
          How it works
        </h2>
        <p className="text-slate-500 text-center mb-14 max-w-xl mx-auto">
          Set up in seconds — no tools, no drilling, no configuration.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="text-center relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-sky-100" />
              )}
              <div className="w-16 h-16 bg-sky-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 text-2xl font-bold shadow-lg shadow-sky-500/20 relative z-10">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
