import journeyLogo from "../assets/logos/journey-logo.png";
import TrustpilotBadge from "./TrustpilotBadge";

const TRAVEL_LINKS = [
  [
    { label: "About Us", href: "#train" },
    { label: "The Train", href: "#train" },
    { label: "Ho Chi Minh City to Hanoi", href: "#routes" },
  ],
  [
    { label: "Hanoi to Ho Chi Minh", href: "#routes" },
    { label: "Hanoi to Hanoi", href: "#routes" },
  ],
  [{ label: "Trail of the Dragon’s Back and Southbound Legacy", href: "#routes" }],
  [
    { label: "Feedback", href: "#testimonials" },
    { label: "Blogs", href: "#blog" },
    { label: "Photos Gallery", href: "#gallery" },
  ],
  [
    { label: "SJourney Video Gallery", href: "#gallery" },
    { label: "Contact Us", href: "#contact" },
  ],
  [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms and Conditions", href: "#" },
  ],
];

const OTHER_TRAINS = ["Palace on Wheels", "Maharajas Express", "Golden Chariot", "Deccan Odyssey"];

const SOCIALS = [
  {
    label: "Facebook",
    path: "M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.3-.04-1.3-.13-2.45-.13-2.45 0-4.1 1.5-4.1 4.25V10.9H7.4V14h2.75v8h3.35z",
  },
  {
    label: "LinkedIn",
    path: "M6.9 8.7H3.5V21h3.4V8.7zM5.2 3a1.9 1.9 0 100 3.8 1.9 1.9 0 000-3.8zM21 13.9c0-3.2-1.7-4.7-4-4.7-1.8 0-2.6 1-3.1 1.7V8.7H10.5c0 1.2.05 12.3.05 12.3H14v-6.9c0-.4 0-.8.2-1.1.4-.9 1.2-1 1.9-1 1.4 0 1.9 1 1.9 2.6V21H21v-7.1z",
  },
  {
    label: "X",
    path: "M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.2 22H3l7.3-8.3L2.5 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L7.4 3.8H5.6L17.8 20z",
  },
  {
    label: "YouTube",
    path: "M22 7.2c-.2-1-1-1.7-2-1.9C18.1 5 12 5 12 5s-6.1 0-7.9.3c-1 .2-1.8.9-2 1.9C2 9 2 12 2 12s0 3 .1 4.8c.2 1 1 1.7 2 1.9C5.9 19 12 19 12 19s6.1 0 7.9-.3c1-.2 1.8-.9 2-1.9.1-1.8.1-4.8.1-4.8s0-3-.1-4.8zM10 15.1V8.9L15.4 12 10 15.1z",
  },
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.22 1 .48 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.8s0 3.5-.1 4.8c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.1 15.5 2 15.1 2 12s.1-3.5.2-4.8c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1012 18.6 6.6 6.6 0 0012 5.4zm0 10.9A4.3 4.3 0 1112 7.7a4.3 4.3 0 010 8.6zm6.9-11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
  },
  {
    label: "Pinterest",
    path: "M12 2a10 10 0 00-3.6 19.3c-.1-.8-.2-2 .05-2.9.2-.9 2.1-8.8 2.1-8.8s-.5-1.1-.5-2.7c0-2.5 1.5-4.4 3.3-4.4 1.6 0 2.3 1.2 2.3 2.6 0 1.6-1 4-1.6 6.2-.4 1.8.9 3.3 2.7 3.3 3.2 0 5.7-3.4 5.7-8.3 0-4.3-3.1-7.3-7.5-7.3-5.1 0-8.1 3.8-8.1 7.8 0 1.5.6 3.2 1.3 4.1.2.2.2.4.1.6l-.5 1.8c-.1.4-.3.5-.7.3-1.4-.7-2.3-2.8-2.3-4.5C3.2 6.6 6.8 2.8 12 2.8c3.7 0 6.2 2.5 6.2 6.2 0 4.1-2.3 7.2-5.6 7.2-1.1 0-2.2-.6-2.5-1.3l-.7 2.6c-.3 1-1 2.3-1.4 3.1A10 10 0 1012 2z",
  },
];

const QR_CELLS = Array.from({ length: 121 }, (_, i) => ({
  x: i % 11,
  y: Math.floor(i / 11),
})).filter(({ x, y }) => {
  const finder = (x < 3 && y < 3) || (x > 7 && y < 3) || (x < 3 && y > 7);
  return !finder && (x * 7 + y * 11 + x * y) % 3 === 0;
});

const QrCode = () => (
  <div className="relative h-[195px] w-[195px] bg-white p-[10px]">
    <svg viewBox="0 0 11 11" className="h-full w-full" aria-label="QR code" role="img">
      {QR_CELLS.map(({ x, y }) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" rx="0.18" fill="#a50f23" />
      ))}
      {[
        [0, 0],
        [8, 0],
        [0, 8],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect x={x} y={y} width="3" height="3" rx="0.3" fill="#a50f23" />
          <rect x={x + 0.6} y={y + 0.6} width="1.8" height="1.8" rx="0.2" fill="#fff" />
          <rect x={x + 1} y={y + 1} width="1" height="1" rx="0.15" fill="#a50f23" />
        </g>
      ))}
    </svg>
    <img
      src={journeyLogo}
      alt="SJourney"
      className="absolute left-1/2 top-1/2 h-[45px] w-auto -translate-x-1/2 -translate-y-1/2 bg-white"
    />
  </div>
);

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-[20px] bg-[#770614] text-white">
      <div className="mx-auto w-[88%] max-w-[1600px] pb-[75px] pt-[80px]">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-[1.05fr_1.3fr_1.15fr_0.6fr] lg:gap-x-10">
          <div>
            <h3 className="font-head text-[clamp(26px,1.8vw,34px)] text-white">Contact Us</h3>
            <div className="mt-[30px]">
              <p className="font-serif text-[clamp(18px,1.16vw,22px)] text-gold">Hotline (Phone/whatsapp)</p>
              <a
                href="tel:+447739716978"
                className="mt-[6px] block text-[clamp(15px,0.95vw,18px)] font-light leading-[28px] text-white hover:text-gold"
              >
                + 44 ( 0 ) 7739716978
              </a>
            </div>
            <div className="mt-[30px]">
              <p className="font-serif text-[clamp(18px,1.16vw,22px)] text-gold">Email</p>
              <a
                href="mailto:booking@sjourneytrain.com"
                className="mt-[6px] block text-[clamp(15px,0.95vw,18px)] font-light leading-[28px] text-white hover:text-gold"
              >
                booking@sjourneytrain.com
              </a>
            </div>
            <div className="mt-[30px]">
              <p className="font-serif text-[clamp(18px,1.16vw,22px)] text-gold">Head Office</p>
              <p className="mt-[6px] text-[clamp(15px,0.95vw,18px)] font-light leading-[28px] text-white">
                25 Grangewood, Wexham,
                <br />
                Slough, south bucks
                <br />
                SL3 6LP, United kingdom
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-head text-[clamp(26px,1.8vw,34px)] text-white">Travel Info</h3>
            <div className="ml-[5px] mt-[30px] space-y-[27px]">
              {TRAVEL_LINKS.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-wrap items-center text-[clamp(15px,0.95vw,18px)] leading-[28px]">
                  {row.map((link, linkIndex) => (
                    <span key={link.label} className="flex items-center">
                      <a href={link.href} className="text-white hover:text-gold">
                        {link.label}
                      </a>
                      {(linkIndex < row.length - 1 || rowIndex < TRAVEL_LINKS.length - 1) && (
                        <span className="mx-[10px] text-white">|</span>
                      )}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-head text-[clamp(26px,1.8vw,34px)] text-white">Follow Us</h3>
            <div className="mt-[20px] flex flex-wrap gap-[6px]">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href="#"
                  aria-label={social.label}
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#a50f23] text-white transition hover:bg-gold hover:text-[#770614]"
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>

            <div className="mt-[28px] flex h-[84px] w-[182px] items-center justify-center rounded-[6px] bg-white">
              <TrustpilotBadge />
            </div>

            <h3 className="mt-[28px] font-head text-[clamp(26px,1.8vw,34px)] text-white">Other Trains</h3>
            <ul className="mt-[20px] space-y-[16px]">
              {OTHER_TRAINS.map((train) => (
                <li key={train} className="flex items-center gap-[10px] text-[clamp(16px,1vw,19px)] text-white">
                  <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[4px] bg-gold">
                    <svg viewBox="0 0 24 24" className="h-3 w-3 fill-[#770614]" aria-hidden="true">
                      <path d="M7 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V5a3 3 0 013-3zm0 4v6h10V6H7zm1 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM9 9h6v2H9V9z" />
                    </svg>
                  </span>
                  {train}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center lg:mt-[64px] lg:justify-end">
            <QrCode />
          </div>
        </div>
      </div>

      <div className="bg-black py-[24px] text-center text-[clamp(16px,1.05vw,20px)] text-white">
        © 2025 Copyrights by SJourney. All Rights Reserved
      </div>
    </footer>
  );
}
