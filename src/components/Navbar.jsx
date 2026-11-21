import { useState } from "react";
import journeyLogo from "../assets/logos/journey-logo.png";
import tjLogo from "../assets/logos/tailormade-journeys-logo.png";
import useActiveSection from "../hooks/useActiveSection";

const HREFS = {
  home: "#home",
  train: "#train",
  routes: "#routes",
  booking: "#booking",
  cabins: "#cabins",
  gallery: "#gallery",
  blog: "#blog",
  partner: "#",
};

const TOUR_7 = "SJourney Train – 07 Nights/08 Days";
const TOUR_3 = "SJourney Train – 03 Nights/04 Days";

const DATES_AND_FARES = [
  { label: "Hanoi to Ho Chi Minh City", href: HREFS.booking },
  { label: "Ho Chi Minh City to Hanoi", href: HREFS.booking },
  { label: "Hanoi to Hanoi", href: HREFS.booking },
  { label: "Trail of the Dragon’s Back & Southbound Legacy", href: HREFS.booking },
];

const NAV = [
  { label: "Home", href: HREFS.home },
  {
    label: "Train",
    href: HREFS.train,
    dropdown: [
      { label: TOUR_7, href: HREFS.train, tour: TOUR_7 },
      { label: TOUR_3, href: HREFS.train, tour: TOUR_3 },
    ],
  },
  {
    label: "Routes",
    href: HREFS.routes,
    dropdown: [
      {
        label: "Hanoi to Ho Chi Minh City ( North to South Route)",
        href: HREFS.routes,
        tour: TOUR_7,
      },
      {
        label: "Ho Chi Minh to Hanoi City ( South to North Route)",
        href: HREFS.routes,
        tour: TOUR_7,
      },
      { label: "Hanoi to Hanoi", href: HREFS.routes, tour: TOUR_3 },
      {
        label: "Trail of the Dragon’s Back & Southbound Legacy",
        href: HREFS.routes,
        tour: TOUR_7,
      },
    ],
  },
  { label: "Dates", href: HREFS.booking, match: [], dropdown: DATES_AND_FARES },
  { label: "Fares", href: HREFS.booking, match: ["booking"], dropdown: DATES_AND_FARES },
  { label: "Offers", href: HREFS.cabins },
  { label: "Gallery", href: HREFS.gallery },
  { label: "Blogs", href: HREFS.blog },
];

const Caret = ({ className = "" }) => (
  <svg
    viewBox="0 0 12 8"
    className={`ml-2 h-2.5 w-3 fill-current transition-transform ${className}`}
    aria-hidden="true"
  >
    <path d="M0 0h12L6 8z" />
  </svg>
);

const isItemActive = (item, activeSection) => {
  if (item.match) return item.match.includes(activeSection);
  return (
    item.href === `#${activeSection}` ||
    item.dropdown?.some((child) => child.href === `#${activeSection}`)
  );
};

export default function Navbar({ setSelectedTour = () => {} }) {
  const [open, setOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState(null);
  const activeSection = useActiveSection();

  const closeMenus = () => {
    document.activeElement?.blur();
    setOpen(false);
    setOpenMobileItem(null);
  };

  const handleHomeClick = (event) => {
    event.preventDefault();
    window.history.replaceState(null, "", HREFS.home);
    window.scrollTo({ top: 0 });
    closeMenus();
  };

  const handleLinkClick = (link, event) => {
    if (link.href === HREFS.home) {
      handleHomeClick(event);
      return;
    }
    if (link.tour) setSelectedTour(link.tour);
    closeMenus();
  };

  return (
    <header className="relative z-30 bg-brand text-white">
      <div className="mx-auto flex h-[88px] max-w-[1700px] flex-nowrap items-center justify-between gap-4 whitespace-nowrap px-6 lg:px-8 2xl:px-[135px]">
        <a href={HREFS.home} onClick={handleHomeClick} className="shrink-0" aria-label="SJourney home">
          <img src={journeyLogo} alt="SJourney" className="h-[76px] w-auto" />
        </a>

        {/* Desktop menu */}
        <nav className="hidden flex-nowrap items-center self-stretch gap-8 whitespace-nowrap lg:flex 2xl:gap-10">
          {NAV.map((item) => (
            <div key={item.label} className="group relative flex h-full items-center self-stretch">
              <a
                href={item.href}
                onClick={(event) => handleLinkClick(item, event)}
                className={`flex shrink-0 items-center whitespace-nowrap py-4 font-serif text-[23px] transition-colors hover:text-gold group-focus-within:text-gold ${
                  isItemActive(item, activeSection) ? "text-gold" : "text-white"
                } ${item.dropdown ? "group-hover:text-gold" : ""}`}
              >
                {item.label}
                {item.dropdown && <Caret />}
              </a>
              {item.dropdown && (
                <ul
                  className={`invisible absolute left-[-25px] top-full z-50 box-border max-w-[90vw] break-words bg-white py-2 whitespace-normal text-[#3d4852] opacity-0 shadow-sm transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${
                    item.label === "Train" ? "w-[445px]" : "w-[355px]"
                  }`}
                >
                  {item.dropdown.map((d) => (
                    <li key={d.label} className="break-words whitespace-normal">
                      <a
                        href={d.href}
                        onClick={(event) => handleLinkClick(d, event)}
                        className="block w-full break-words px-[35px] py-3 whitespace-normal font-head text-[21px] leading-tight text-[#3d4852] transition-colors hover:text-brand"
                      >
                        {d.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <a
            href={HREFS.booking}
            onClick={closeMenus}
            className="flex h-14 shrink-0 items-center justify-center self-center whitespace-nowrap rounded bg-gold px-8 font-serif text-[23px] text-white transition hover:bg-gold-dark"
          >
            Book Now
          </a>
        </nav>

        <a href={HREFS.partner} className="hidden h-[58px] w-[116px] shrink-0 items-center justify-center self-center rounded-sm bg-white p-1.5 lg:flex">
          <img src={tjLogo} alt="Tailormade Journeys" className="h-full w-full object-contain" />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8 stroke-white" fill="none" strokeWidth="2">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/20 bg-brand px-6 pb-6 lg:hidden">
          {NAV.map((item) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div className="flex items-center border-b border-white/10">
                  <a
                    href={item.href}
                    onClick={(event) => handleLinkClick(item, event)}
                    className={`flex-1 py-3 font-serif text-xl ${
                      isItemActive(item, activeSection) ? "text-gold" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileItem((current) => (current === item.label ? null : item.label))
                    }
                    aria-expanded={openMobileItem === item.label}
                    aria-label={`Toggle ${item.label} submenu`}
                    className="px-3 py-3"
                  >
                    <Caret className={openMobileItem === item.label ? "rotate-180" : ""} />
                  </button>
                </div>
              ) : (
                <a
                  href={item.href}
                  onClick={(event) => handleLinkClick(item, event)}
                  className={`block border-b border-white/10 py-3 font-serif text-xl ${
                    isItemActive(item, activeSection) ? "text-gold" : ""
                  }`}
                >
                  {item.label}
                </a>
              )}
              {item.dropdown && openMobileItem === item.label && (
                <ul className="border-b border-white/10 pb-2 pl-8">
                  {item.dropdown.map((d) => (
                    <li key={d.label}>
                      <a
                        href={d.href}
                        onClick={(event) => handleLinkClick(d, event)}
                        className="block py-2 font-serif text-lg text-white/90 hover:text-gold"
                      >
                        {d.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <a href={HREFS.booking} onClick={closeMenus} className="mt-4 block rounded bg-gold py-3 text-center font-serif text-xl">
            Book Now
          </a>
          <img src={tjLogo} alt="Tailormade Journeys" className="mt-5 h-14 rounded-sm bg-white p-1" />
        </nav>
      )}
    </header>
  );
}
