import { useEffect, useState } from "react";
import heroPoster from "../assets/images/hero-1.jpg";
import TrustpilotBadge from "./TrustpilotBadge";

const VIDEO_ID = "VRtljYP2wcw";
const VIDEO_SRC = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&playsinline=1`;

const posterFiles = import.meta.glob("../assets/images/video-poster.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});
const VIDEO_POSTER = posterFiles["../assets/images/video-poster.jpg"] || heroPoster;

export default function Welcome() {
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!videoOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [videoOpen]);

  return (
    <section id="train" className="bg-white pb-20 pt-4 text-ink scroll-mt-[20px]">
      <div className="mx-auto w-[86%] max-w-[1625px]">
        <div className="flex justify-center md:justify-end">
          <TrustpilotBadge />
        </div>

        <div className="text-center">
          <h1 className="mt-6 text-[clamp(28px,2.42vw,46px)] font-medium leading-tight">
            Welcome to SJourney
          </h1>
          <p className="mt-10 font-serif text-[clamp(20px,1.52vw,29px)] leading-snug">
            Tailormade Journeys Limited are the strategic partners with SJourney – Vietnam. The train is owned
            and operated by SJourney.
          </p>
          <h2 className="mt-10 font-serif text-[clamp(26px,2.1vw,40px)] font-bold leading-snug tracking-[0.3px]">
            Discover Vietnam’s First Luxury Train Vacations
          </h2>
        </div>

        <div className="mt-[45px] grid grid-cols-1 items-stretch gap-[25px] lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <img
              src={VIDEO_POSTER}
              alt="SJourney luxury train"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <button
              onClick={() => setVideoOpen(true)}
              className="group absolute inset-0 flex items-center justify-center"
              aria-label="Play video"
            >
              <span className="flex h-[120px] w-[120px] items-center justify-center rounded-full border-4 border-white bg-transparent transition-transform group-hover:scale-105">
                <span className="ml-[3px] h-0 w-0 border-y-[15px] border-l-[28px] border-y-transparent border-l-white" />
              </span>
            </button>
          </div>

          <div className="flex flex-col">
            <h3 className="font-head text-[clamp(32px,2.4vw,46px)] font-normal leading-[1.2] lg:whitespace-nowrap">
              Sjourney Luxury Train
            </h3>
            <p className="mt-[22px] text-[clamp(16px,1.16vw,22px)] font-semibold lg:whitespace-nowrap">
              Vietnam Luxury Tour by Rail — A Journey of Elegance
            </p>
            <div className="mt-[45px] space-y-[22px] text-[clamp(16px,1.1vw,21px)] font-light leading-[1.62]">
              <p>
                SJourney train is one of the finest choices for a Vietnam luxury train journey, offering a relaxed
                and comfortable trip. It travels from Hanoi to Ho Chi Minh City, covering 1,726 kilometres. Along
                the way, you’ll pass through peaceful villages, busy towns, and beautiful countryside. Each stop
                gives you a chance to enjoy local food and learn about the culture.
              </p>
              <p>
                The train has soft seats, clean rooms, and large windows to enjoy the view. You can also enjoy
                fresh meals made with care, including both Vietnamese and international dishes. SJourney train is
                a simple and pleasant way to see the best of Vietnam while travelling in style.
              </p>
            </div>
            <div className="mt-auto flex justify-end pt-[65px]">
              <a
                href="#routes"
                className="inline-flex h-[55px] items-center rounded-[4px] bg-brand px-5 font-serif text-[clamp(18px,1.26vw,24px)] text-white transition hover:bg-brand-dark"
              >
                Discover More
                <svg
                  viewBox="0 0 24 24"
                  className="ml-1 h-5 w-5 fill-none stroke-white"
                  strokeWidth="3"
                  aria-hidden="true"
                >
                  <path d="M6 5l7 7-7 7M13 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {videoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setVideoOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="SJourney luxury train video"
        >
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute right-6 top-6 text-[42px] leading-none text-white"
            aria-label="Close video"
          >
            ×
          </button>
          <div className="aspect-video w-full max-w-[1200px]" onClick={(event) => event.stopPropagation()}>
            <iframe
              src={VIDEO_SRC}
              title="SJourney luxury train video"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
