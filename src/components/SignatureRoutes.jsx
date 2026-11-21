const ROUTES = [
  {
    route: "Hanoi to Ho Chi Minh City",
    duration: "8 Days / 7 Nights",
    title: "Southbound Legacy",
    image: "/Cyclo-Hoi-An-Vietnam.webp",
  },
  {
    route: "Ho Chi Minh City to Hanoi",
    duration: "8 Days / 7 Nights",
    title: "Northern Heritage",
    image: "/Gate-of-the-Forbidden-City-Hue-Vietnam.webp",
  },
  {
    route: "Hanoi to Hanoi",
    duration: "4 Days / 3 Nights",
    title: "Hanoi to Hanoi",
    image: "/converted_image-2.webp",
  },
  {
    route: "Hanoi to Hanoi",
    duration: "3 Days / 2 Nights",
    title: "Halong Bay Escape",
    image: "/Floating-fishing-village-and-rock-island-Halong-Bay-Vietnam.webp",
  },
];

export default function SignatureRoutes() {
  return (
    <section id="routes" className="scroll-mt-[20px] bg-white pb-20 pt-20">
      <div className="mx-auto w-[86%] max-w-[1625px]">
        <div className="mx-auto max-w-[1210px] text-center">
          <h2 className="mb-[22px] font-head text-[clamp(28px,2.36vw,45px)] font-normal leading-[1.2] tracking-normal text-ink lg:whitespace-nowrap">
            Sjourney Signature Routes – Each Journey, A Different Story
          </h2>
          <p className="mb-[55px] text-[clamp(16px,1.1vw,21px)] font-light leading-[1.62] text-ink lg:leading-[34px]">
            Each Sjourney route is a world of its own – from misty mountains and emerald bays to imperial cities
            and sunlit shores. Every itinerary is thoughtfully curated with its own rhythm, highlights, and
            signature moments. Choose the journey that speaks to you, and let Vietnam unfold in its most
            unforgettable way.
          </p>
        </div>

        <div className="grid gap-[25px] sm:grid-cols-2 lg:grid-cols-3">
          {ROUTES.map((r, i) => (
            <a
              key={r.title + i}
              href="#"
              className="block overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
            >
              <img src={r.image} alt={r.title} className="block h-[312px] w-full object-cover" />
              <div className="bg-brand-card px-[23px] pb-8 pt-7 text-[#f9b514]">
                <p className="text-[22px] leading-[37px]">{r.route}</p>
                <p className="text-[22px] leading-[37px]">{r.duration}</p>
                <h3 className="mt-8 font-head text-[34px] leading-tight text-white">{r.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
