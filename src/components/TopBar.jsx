const CONTACTS = [
  { flags: ["ca", "us"], label: "Toll Free 1-855 – 952 – 6526" },
  { flags: ["gb"], label: "+44 01753 201201", href: "tel:+441753201201" },
  { flags: ["ca"], label: "+1-416-619-7795", href: "tel:+14166197795" },
  { flags: ["au"], label: "+61-2-86078986", href: "tel:+61286078986" },
  { whatsapp: true, label: "+ 44 ( 0 ) 7739716978", href: "https://wa.me/447739716978" },
];

const Flag = ({ code }) => (
  <img
    src={`https://flagcdn.com/w40/${code}.png`}
    alt={code.toUpperCase()}
    className="h-[18px] w-[26px] rounded-[2px] object-cover"
  />
);

const WhatsApp = () => (
  <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#25d366]">
    <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  </span>
);

export default function TopBar() {
  return (
    <div className="hidden bg-black text-white lg:block">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-8 py-3 xl:px-[125px]">
        {CONTACTS.map((c, i) => {
          const inner = (
            <>
              <span className="flex items-center gap-2">
                {c.whatsapp ? <WhatsApp /> : c.flags.map((f) => <Flag key={f} code={f} />)}
              </span>
              <span className="text-[17px] font-light">{c.label}</span>
            </>
          );
          return c.href ? (
            <a key={i} href={c.href} className="flex items-center gap-3 hover:text-gold">
              {inner}
            </a>
          ) : (
            <div key={i} className="flex items-center gap-3">
              {inner}
            </div>
          );
        })}
      </div>
    </div>
  );
}
