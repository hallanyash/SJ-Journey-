import { useEffect, useState } from "react";

const SECTION_IDS = [
  "home",
  "train",
  "routes",
  "gallery",
  "escape",
  "cabins",
  "booking",
  "testimonials",
  "blog",
  "contact",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY < 40) setActiveSection("home");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return activeSection;
}
