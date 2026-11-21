import PlaceholderSvg from "./PlaceholderSvg";

const POSTS = [
  {
    title:
      "SJourney Asia in Guilin: Crossing from Vietnam into Southern China on the Indochina Passage",
    excerpt:
      "There is a moment on a great rail journey when the landscape changes, the language shifts and you realise that the train is carrying you into an entirely new world.",
    date: "August 7, 2026",
    comments: "No Comments",
    seed: 1,
  },
  {
    title:
      "SJourney Train Dining Experience: A Culinary Journey Through Vietnam on Luxury Rails",
    excerpt:
      "One of the greatest pleasures of travelling through Vietnam is discovering its remarkable cuisine. From fragrant bowls of pho and delicate fresh spring rolls to refined imperial recipes and vibrant",
    date: "July 22, 2026",
    comments: "No Comments",
    seed: 2,
  },
  {
    title: "SJourney Train: Experience Vietnam’s First Luxury Train Journey",
    excerpt:
      "Vietnam is a country of extraordinary contrasts, where ancient imperial cities, emerald rice terraces, pristine coastlines, vibrant markets, and modern cities come together to create one of Asia’s most rewarding",
    date: "June 29, 2026",
    comments: "No Comments",
    seed: 3,
  },
];

export default function Blog() {
  return (
    <section id="blog" className="scroll-mt-[20px] bg-white pb-[90px] pt-[55px]">
      <h2 className="text-center font-head text-[clamp(28px,2.32vw,44px)] font-bold text-black">
        Tales of Culture & Discovery
      </h2>
      <p className="mx-auto mt-[30px] max-w-[900px] px-6 text-center text-[clamp(17px,1.16vw,22px)] leading-[37px] text-black">
        Stay updated with SJourney’s latest highlights, exclusive events, and travel insights. Discover new routes,
        special experiences, and exciting updates as we redefine luxury rail travel in Vietnam.
      </p>

      <div className="mx-auto mt-[38px] grid w-[86%] max-w-[1625px] grid-cols-1 items-stretch gap-x-[37px] gap-y-[37px] sm:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post) => (
          <article
            key={post.title}
            className="flex h-full flex-col overflow-hidden rounded-none bg-white shadow-[0_5px_25px_rgba(0,0,0,0.08)]"
          >
            <div className="relative">
              <PlaceholderSvg seed={post.seed} className="h-[341px] w-full" />
              <span className="absolute right-[25px] top-[25px] rounded-full bg-[rgba(100,110,120,0.8)] px-[18px] py-[6px] text-[clamp(13px,0.79vw,15px)] uppercase text-white">
                Blogs
              </span>
            </div>

            <div className="flex flex-1 flex-col px-[38px] pt-[45px]">
              <h3 className="font-head text-[clamp(22px,1.75vw,33px)] font-bold leading-[1.5] text-black">
                {post.title}
              </h3>
              <p className="mt-[28px] text-[clamp(16px,1.05vw,20px)] font-light leading-[32px] text-[#777]">
                {post.excerpt}
              </p>
              <a
                href="#blog"
                className="mt-[28px] text-[clamp(13px,0.84vw,16px)] font-bold uppercase text-black hover:text-brand"
              >
                Read More »
              </a>
            </div>
            <div className="border-t border-[#eee] px-[38px] py-[14px] text-[clamp(13px,0.84vw,16px)] text-[#999]">
              {post.date} &nbsp;·&nbsp; {post.comments}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
