const reviews = [
  {
    name: 'Sarah M.',
    location: 'London, UK',
    stars: 5,
    text: 'We had a ground-floor Airbnb in Barcelona and I could hear people walking past our window at night. PeekProof let us actually sleep. Worth every cent.',
  },
  {
    name: 'Thomas K.',
    location: 'Munich, Germany',
    stars: 5,
    text: 'We travel as a family 6+ times a year. First thing I do at check-in is stick PeekProof on the windows. Now my wife can actually relax.',
  },
  {
    name: 'Emma L.',
    location: 'Stockholm, Sweden',
    stars: 4,
    text: 'Someone tried our hotel window one night in Thailand. PeekProof went off instantly — the alarm scared them away. I don\'t travel without it.',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-slate-200'}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 text-center mb-4">
          Trusted by travellers worldwide
        </h2>
        <p className="text-slate-500 text-center mb-14 max-w-xl mx-auto">
          Join thousands of families who travel with peace of mind.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.name} className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <Stars count={review.stars} />
              <p className="text-slate-700 mt-4 mb-6 leading-relaxed">"{review.text}"</p>
              <div>
                <p className="font-semibold text-slate-800 text-sm">{review.name}</p>
                <p className="text-slate-400 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
