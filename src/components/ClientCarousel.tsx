"use client";

const clients = [
  "Patra Logistik",
  "CrescentRating",
  "HalalTrip",
  "MudahDigital",
  "Mitra Kawan Bersama",
  "Mega Nusa Indonesia",
  "Implementasi Teknologi Indonesia",
  "WeCare",
];

export function ClientCarousel() {
  const row = [...clients, ...clients];

  return (
    <section className="border-y border-border bg-card py-10">
      <div className="container-editorial mb-8">
        <p className="eyebrow">
          <span className="h-px w-8 bg-brand" />
          Trusted by teams &amp; brands we&apos;ve shipped for
        </p>
      </div>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-12 pr-12">
          {row.map((name, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="whitespace-nowrap font-display text-2xl font-bold tracking-tight text-foreground/45 transition-colors hover:text-foreground md:text-3xl">
                {name}
              </span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand/70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
