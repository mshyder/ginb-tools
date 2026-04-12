"use client";

export default function ClientMarquee() {
  // Placeholder client names (will be replaced by real logos later)
  const clients = [
    "Apex Construction",
    "Nordic Industrial",
    "Meridian Aerospace",
    "Continental Auto",
    "Pacific Builders",
    "Summit Engineering",
    "Global Fabricators",
    "Titan Infrastructure",
  ];

  return (
    <section
      id="client-marquee"
      className="overflow-hidden border-y border-gray-200/60 bg-gradient-to-b from-gray-50 to-gray-100/80 py-10"
    >
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
        Trusted by Industry Leaders
      </p>
      <div className="group relative">
        {/* Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-gray-50 to-transparent" />

        {/* Marquee Track (duplicated for seamless loop) */}
        <div className="animate-marquee flex w-max items-center gap-16 group-hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="flex h-12 items-center rounded-lg border border-gray-200/90 bg-white/95 px-8 text-sm font-bold tracking-wide text-gray-500 shadow-sm transition-all duration-300 hover:border-brand-red/25 hover:text-gray-700 hover:shadow-md"
            >
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
