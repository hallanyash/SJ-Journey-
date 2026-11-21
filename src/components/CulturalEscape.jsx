import hero4 from "../assets/images/hero-4.jpg";
import PlaceholderSvg from "./PlaceholderSvg";

const ROWS = [
  {
    image: hero4,
    seed: null,
    title: "Elegant Cabins & Timeless Charm",
    text: "SJourney blends Indochine elegance with modern luxury, offering a first-class perspective on Vietnam’s stunning landscapes. Immerse yourself in a journey where every detail reflects cultural richness, creating lasting memories.",
  },
  {
    image: null,
    seed: 1,
    title: "Gastronomic Delights Onboard",
    text: "Savor the finest Vietnamese and international cuisine, crafted by expert chefs using fresh local ingredients. Our ever-changing menu reflects each destination, ensuring a personalized and exquisite dining experience.",
  },
  {
    image: null,
    seed: 2,
    title: "Exclusive Cultural Performances",
    text: "Enjoy captivating performances that celebrate Vietnam’s artistic heritage. From traditional music to mesmerizing dance, each show enriches your journey, combining luxury with cultural immersion.",
  },
];

export default function CulturalEscape() {
  return (
    <section id="escape" className="scroll-mt-[20px] bg-cream pb-0 pt-[120px] text-ink">
      <div className="mx-auto w-full px-6 text-center lg:w-[86%] lg:max-w-[1625px] lg:px-0">
        <h2 className="font-head text-[clamp(30px,2.42vw,46px)] font-normal leading-[1.2] lg:whitespace-nowrap">
          A Luxurious Cultural Escape
        </h2>
        <p className="mx-auto mt-[38px] max-w-[920px] text-[clamp(16px,1.1vw,21px)] font-light leading-[34px]">
          Experience refined cabins, exquisite cuisine, and captivating performances that celebrate Vietnam’s
          heritage. A journey of elegance, flavor, and culture, crafted for unforgettable moments aboard Vietnam’s
          premier luxury train.
        </p>
      </div>

      <div className="mx-auto mt-[50px] w-full space-y-[60px] px-6 lg:w-[88%] lg:max-w-[1600px] lg:px-0">
        {ROWS.map((row, i) => (
          <div
            key={row.title}
            className={`flex flex-col gap-[25px] lg:flex-row lg:items-center ${
              i % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2">
              {row.image ? (
                <img src={row.image} alt={row.title} className="aspect-[3/2] w-full object-cover" />
              ) : (
                <PlaceholderSvg seed={row.seed} className="aspect-[3/2] w-full" />
              )}
            </div>
            <div
              className={`flex w-full flex-col justify-center lg:w-1/2 ${
                i % 2 === 0 ? "lg:pl-[25px]" : ""
              }`}
            >
              <h3 className="mb-[22px] font-head text-[clamp(24px,1.8vw,34px)] font-bold leading-tight text-brand">
                {row.title}
              </h3>
              <div className="space-y-5 text-justify text-[clamp(16px,1.1vw,21px)] font-light leading-[34px]">
                <p>{row.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
