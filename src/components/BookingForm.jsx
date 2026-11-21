import { useEffect, useState } from "react";

const PREFIXES = ["Mr", "Mrs", "Ms", "Miss", "Dr"];
const ADULTS = Array.from({ length: 10 }, (_, i) => String(i + 1));
const CHILDREN = Array.from({ length: 11 }, (_, i) => String(i));
const COUNTRIES = [
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "India",
  "Germany",
  "France",
];
const TOURS = [
  "SJourney Train – 07 Nights/08 Days",
  "SJourney Train – 03 Nights/04 Days",
];
const DATES = {
  [TOURS[0]]: ["12 March 2026", "19 March 2026", "02 April 2026"],
  [TOURS[1]]: ["05 April 2026", "12 April 2026", "26 April 2026"],
};

const controlClass =
  "w-full rounded-[6px] border border-[#d9d9d9] bg-white px-4 text-[clamp(15px,0.95vw,18px)] shadow-sm focus:border-brand focus:outline-none focus:ring-1 focus:ring-brand";

const Label = ({ htmlFor, children }) => (
  <label
    htmlFor={htmlFor}
    className="mb-1.5 block text-[clamp(14px,0.9vw,17px)] font-medium text-ink"
  >
    {children}
  </label>
);

export default function BookingForm({ selectedTour = "" }) {
  const [form, setForm] = useState({
    prefix: "",
    name: "",
    email: "",
    mobile: "",
    country: "",
    adults: "",
    children5to12: "",
    childrenBelow5: "",
    tour: selectedTour,
    dates: "",
    message: "",
  });

  useEffect(() => {
    setForm((current) =>
      current.tour === selectedTour ? current : { ...current, tour: selectedTour, dates: "" }
    );
  }, [selectedTour]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
      ...(name === "tour" ? { dates: "" } : {}),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    // TODO: Connect to booking API
  };

  return (
    <section id="booking" className="scroll-mt-[20px] bg-white pb-[100px] pt-[120px] text-ink">
      <div className="mx-auto w-full px-6 text-center">
        <h2 className="font-head text-[clamp(30px,2.42vw,46px)] font-normal leading-[1.2] lg:whitespace-nowrap">
          Online Booking
        </h2>
        <p className="mx-auto mt-[35px] max-w-[1260px] text-[clamp(16px,1.1vw,21px)] font-light leading-[34px]">
          Secure your place on SJourney’s Vietnam Luxury Train and prepare for an unparalleled travel experience.
          Our booking process allows you to reserve your journey through Vietnam’s stunning landscapes. Choose your
          preferred dates, cabin type, and additional services to tailor your luxury rail adventure to perfection.
          Start your journey today.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-[70px] w-[86%] max-w-[1625px] space-y-[30px]">
        <div className="grid grid-cols-1 gap-[33px] lg:grid-cols-2">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
            <div className="w-full lg:w-[159px]">
              <Label htmlFor="prefix">Prefix*</Label>
              <select
                id="prefix"
                name="prefix"
                value={form.prefix}
                onChange={handleChange}
                required
                className={`${controlClass} h-14`}
              >
                <option value=""></option>
                {PREFIXES.map((prefix) => (
                  <option key={prefix} value={prefix}>
                    {prefix}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <Label htmlFor="name">Your Name*</Label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                required
                className={`${controlClass} h-14`}
              />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email*</Label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className={`${controlClass} h-14`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[33px] lg:grid-cols-2">
          <div>
            <Label htmlFor="mobile">Mobile Number*</Label>
            <input
              id="mobile"
              name="mobile"
              type="tel"
              value={form.mobile}
              onChange={handleChange}
              required
              className={`${controlClass} h-14`}
            />
          </div>
          <div>
            <Label htmlFor="country">Select Your Country*</Label>
            <select
              id="country"
              name="country"
              value={form.country}
              onChange={handleChange}
              required
              className={`${controlClass} h-14`}
            >
              <option value=""></option>
              {COUNTRIES.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[33px] lg:grid-cols-2">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
            <div className="w-full lg:w-[159px]">
              <Label htmlFor="adults">Adults*</Label>
              <select
                id="adults"
                name="adults"
                value={form.adults}
                onChange={handleChange}
                required
                className={`${controlClass} h-14`}
              >
                <option value=""></option>
                {ADULTS.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full">
              <Label htmlFor="children5to12">Children Between 5 - 12</Label>
              <select
                id="children5to12"
                name="children5to12"
                value={form.children5to12}
                onChange={handleChange}
                className={`${controlClass} h-14`}
              >
                <option value=""></option>
                {CHILDREN.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <Label htmlFor="childrenBelow5">Children Below 5</Label>
            <select
              id="childrenBelow5"
              name="childrenBelow5"
              value={form.childrenBelow5}
              onChange={handleChange}
              className={`${controlClass} h-14`}
            >
              <option value=""></option>
              {CHILDREN.map((count) => (
                <option key={count} value={count}>
                  {count}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[33px] lg:-mt-[8px] lg:grid-cols-2">
          <div>
            <Label htmlFor="tour">Please select a tour</Label>
            <select
              id="tour"
              name="tour"
              value={form.tour}
              onChange={handleChange}
              className={`${controlClass} h-[57px] text-[clamp(17px,1.16vw,22px)] text-[#555]`}
            >
              <option value="">Please select a tour</option>
              {TOURS.map((tour) => (
                <option key={tour} value={tour}>
                  {tour}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="dates">Please select tour first</Label>
            <select
              id="dates"
              name="dates"
              value={form.dates}
              onChange={handleChange}
              disabled={!form.tour}
              className={`${controlClass} h-[57px] text-[clamp(17px,1.16vw,22px)] text-[#555] disabled:bg-neutral-100`}
            >
              <option value="">Please select tour first</option>
              {(DATES[form.tour] || []).map((date) => (
                <option key={date} value={date}>
                  {date}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="lg:mt-[10px]">
          <Label htmlFor="message">Your Message</Label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`${controlClass} h-[150px] resize-y py-4`}
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="rounded-[4px] bg-brand px-10 py-3 font-serif text-[clamp(20px,1.26vw,24px)] text-white transition hover:bg-brand-dark"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
