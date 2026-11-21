import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";
import hero4 from "../assets/images/hero-4.jpg";

const CABINS = [
  {
    image: hero1,
    title: "Twin Cabin",
    subtitle: "Cozy Haven for Two",
    lead: "10m",
    sup: "2",
    description: " room with two single beds, wardrobe, mini bar, and private bathroom.",
  },
  {
    image: hero2,
    title: "Double Cabin",
    subtitle: "A Romantic Retreat",
    lead: "10m",
    sup: "2",
    description: " room featuring one double bed, wardrobe, mini bar, and private bathroom.",
  },
  {
    image: hero4,
    title: "Bistro Car",
    subtitle: "A Culinary Journey",
    lead: "",
    sup: "",
    description: "24/7 luxurious dining car seating 60+ guests, offering customizable international menus.",
  },
];

export default function CabinsSection() {
  return (
    <section id="cabins" className="scroll-mt-[20px] bg-cream pb-[80px] pt-[130px] text-ink">
      <div className="mx-auto w-full px-6 text-center lg:w-[86%] lg:max-w-[1625px] lg:px-0">
        <h2 className="font-head text-[clamp(30px,2.42vw,46px)] font-normal leading-[1.2] lg:whitespace-nowrap">
          Elegant Cabins & Refined Experiences
        </h2>
        <p className="mx-auto mt-[40px] max-w-[920px] text-[clamp(16px,1.1vw,21px)] font-light leading-[34px]">
          Born in the 1920s from a vibrant fusion of Vietnamese and French influences, the Indochine style continues
          to captivate hearts and inspire design. Its lasting impact on Vietnamese heritage is undeniable.
        </p>
      </div>

      <div className="mx-auto mt-[50px] grid w-full grid-cols-1 gap-[27px] px-6 sm:grid-cols-2 lg:w-[86%] lg:max-w-[1600px] lg:grid-cols-3 lg:px-0">
        {CABINS.map((cabin) => (
          <article
            key={cabin.title}
            className="overflow-hidden rounded-[12px] border border-[#e8e2d5] bg-white"
          >
            <img
              src={cabin.image}
              alt={cabin.title}
              className="aspect-[3/2] w-full object-cover"
            />
            <div className="px-[25px] pb-[55px] pt-[30px] text-center">
              <h3 className="font-head text-[clamp(24px,1.8vw,34px)] leading-tight text-brand">{cabin.title}</h3>
              <p className="mt-2 text-[clamp(16px,1.16vw,22px)] font-semibold">{cabin.subtitle}</p>
              <p className="mt-1 text-[clamp(16px,1.1vw,21px)] font-light leading-[34px]">
                {cabin.lead}
                {cabin.sup && <sup>{cabin.sup}</sup>}
                {cabin.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
