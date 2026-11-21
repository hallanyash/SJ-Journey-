import { useEffect, useState } from "react";
import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";
import hero3 from "../assets/images/hero-3.jpg";
import hero4 from "../assets/images/hero-4.jpg";

const SLIDES = [
  { src: hero1, alt: "Luxury cabin with sea view" },
  { src: hero2, alt: "SJourney train carriage and dining setup" },
  { src: hero3, alt: "Train on the coastal route" },
  { src: hero4, alt: "Dining car" },
];

export default function Hero({ interval = 4000 }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), interval);
    return () => clearInterval(id);
  }, [paused, interval]);

  return (
    <section
      id="home"
      className="relative h-[60vh] min-h-[360px] w-full scroll-mt-[20px] overflow-hidden bg-neutral-800 lg:h-[735px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      {SLIDES.map((s, i) => (
        <img
          key={s.alt}
          src={s.src}
          alt={s.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-3 w-3 rounded-full transition-colors ${i === current ? "bg-gold" : "bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}
