import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";
import hero3 from "../assets/images/hero-3.jpg";
import hero4 from "../assets/images/hero-4.jpg";

const IMAGES = [
  { src: "/imagegallery1.webp", alt: "SJourney luxury train gallery image" },
  { src: "/imagegallery2.webp", alt: "SJourney Vietnam journey gallery image" },
  { src: "/imagegallery3.webp", alt: "SJourney luxury train gallery image" },
  { src: "/imagegallery4.webp", alt: "SJourney luxury train gallery image" },
  { src: "/imagegallery5.webp", alt: "SJourney luxury train gallery image" },
  { src: hero1, alt: "Luxury cabin with sea view" },
  { src: hero2, alt: "SJourney train carriage and dining setup" },
  { src: hero3, alt: "Train on the coastal route" },
  { src: hero4, alt: "Dining car" },
];

export default function PhotoGallery() {
  return (
    <section id="gallery" className="scroll-mt-[20px] bg-white">
      <div className="mx-auto max-w-[1100px] px-6 pb-8 pt-12 text-center">
        <h2 className="font-head text-4xl md:text-[46px]">Photo Gallery</h2>
        <p className="mt-6 font-serif text-lg leading-[38px] md:text-[21px]">
          Experience the exquisite journey aboard SJourney’s Vietnam Luxury Train. Our gallery showcases the
          elegance, comfort, and breathtaking scenery travelers enjoy. Explore images of beautifully designed
          cabins, gourmet dining experiences, and panoramic views that highlight the unmatched opulence of luxury
          rail travel through Vietnam’s captivating landscapes. Indulge in a journey like no other.
        </p>
      </div>

      <div className="mx-auto grid w-[86%] max-w-[1625px] grid-cols-1 gap-[6px] sm:grid-cols-2 lg:grid-cols-3">
        {IMAGES.map((image) => (
          <a key={image.src} href="#" className="group relative block h-[320px] overflow-hidden lg:h-[475px]">
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </a>
        ))}
      </div>

      <div className="mt-[60px] flex justify-center pb-[75px]">
        <a
          href="#gallery"
          className="inline-flex h-[88px] w-full max-w-[465px] items-center justify-center gap-2 rounded-[4px] bg-brand font-serif text-[clamp(22px,1.6vw,30px)] text-white transition hover:bg-brand-dark"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-[26px] w-[26px] fill-none stroke-white"
            strokeWidth="3"
            aria-hidden="true"
          >
            <path d="M6 5l7 7-7 7M13 5l7 7-7 7" />
          </svg>
          Photo Gallery
        </a>
      </div>
    </section>
  );
}
