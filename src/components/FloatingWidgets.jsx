import { useEffect, useState } from "react";

export default function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button className="fixed bottom-[22px] left-6 z-40 flex h-[50px] w-[171px] items-center gap-2 rounded-none bg-help px-3 text-[18px] font-semibold text-white hover:bg-help-dark">
        <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
          <path fill="#fff" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
          <circle cx="8" cy="10" r="1.3" fill="#f26a1b" />
          <circle cx="12" cy="10" r="1.3" fill="#f26a1b" />
          <circle cx="16" cy="10" r="1.3" fill="#f26a1b" />
        </svg>
        Need help?
      </button>

      {showTop && (
        <div className="fixed bottom-[14px] right-[18px] z-40 flex h-[76px] w-[82px] items-center justify-center bg-white shadow-md">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="flex h-[41px] w-[41px] items-center justify-center bg-brand text-white hover:bg-brand-dark"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-none stroke-white" strokeWidth="3" aria-hidden="true">
              <path d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
