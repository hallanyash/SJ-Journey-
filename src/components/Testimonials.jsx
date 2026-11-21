import { useEffect, useState } from "react";
import PlaceholderSvg from "./PlaceholderSvg";

const BG_IMAGE = null;
// Add the cream pagoda pattern as src/assets/images/testimonial-bg.png.

const TESTIMONIALS = [
  {
    quote:
      "The trip on the Deccan Odyssey booked with you was amazing. We had a great Holiday on the Luxury Deccan Odyssey and can recommend to people who wish to enjoy India. Appreciate all your help.",
    name: "Nutan Parikh and Family",
    country: "USA",
    avatar: null,
    seed: 1,
  },
  {
    quote:
      "Every moment aboard SJourney felt thoughtfully arranged, from the warm welcome to the final farewell. The scenery, the cuisine, and the care of the team made this a journey we will remember for years.",
    name: "Amelia Hart",
    country: "United Kingdom",
    avatar: null,
    seed: 2,
  },
  {
    quote:
      "A beautiful way to discover Vietnam. The train is elegant without losing the warmth of the places we passed through, and the cultural performances gave the whole experience a special character.",
    name: "Daniel Weber",
    country: "Germany",
    avatar: null,
    seed: 3,
  },
];

const sectionStyle = BG_IMAGE
  ? {
      backgroundImage: `url(${BG_IMAGE})`,
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    }
  : undefined;

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="testimonials" className="scroll-mt-[20px] bg-cream pb-[100px] pt-[85px]" style={sectionStyle}>
      <h2 className="text-center font-head text-[clamp(28px,2.32vw,44px)] font-bold text-black">
        A Collection of Five-Star Moments!
      </h2>
      <p className="mx-auto mt-[30px] max-w-[960px] px-6 text-center text-[clamp(16px,1.1vw,21px)] font-light leading-[34px] text-ink">
        Hear from guests who have experienced SJourney’s elegance, comfort, and cultural charm. Discover
        <br className="hidden lg:block" />
        firsthand stories of luxury, breathtaking views, and unforgettable moments aboard Vietnam’s premier
        <br className="hidden lg:block" />
        luxury train.
      </p>

      <div className="relative mx-auto mt-[45px] h-[277px] w-[86%] max-w-[1625px] bg-white">
        {TESTIMONIALS.map((testimonial, i) => (
          <div
            key={testimonial.name}
            className={`absolute inset-0 flex flex-col justify-center px-[50px] py-[50px] transition-opacity duration-700 ${
              i === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <p className="text-center text-[clamp(17px,1.1vw,21px)] font-light leading-[1.6] text-ink lg:leading-[50px]">
              {testimonial.quote}
            </p>
            <div className="mt-[22px] flex items-center justify-center gap-[18px]">
              {testimonial.avatar ? (
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-[76px] w-[76px] rounded-full object-cover"
                />
              ) : (
                <div className="h-[76px] w-[76px] overflow-hidden rounded-full">
                  <PlaceholderSvg seed={testimonial.seed} className="h-full w-full" />
                </div>
              )}
              <div className="text-center">
                <p className="font-[Arial,Helvetica,sans-serif] text-[clamp(19px,1.21vw,23px)] font-bold text-brand">
                  {testimonial.name}
                </p>
                <p className="font-[Arial,Helvetica,sans-serif] text-[clamp(15px,0.95vw,18px)] font-bold text-brand">
                  {testimonial.country}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[28px] text-center">
        <a
          href="#testimonials"
          className="text-[clamp(19px,1.26vw,24px)] text-[#8b0000] hover:underline"
        >
          View All Testimonials
        </a>
      </div>
    </section>
  );
}
