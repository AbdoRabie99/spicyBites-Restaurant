import swiggy from "../assets/swiggy.png";
import zomato from "../assets/zomato.png";
import magicpin from "../assets/magicpin.png";
import chowman from "../assets/Chowman-Logo.png";

const partners = [
  { name: "Swiggy", image: swiggy },
  { name: "Zomato", image: zomato },
  { name: "Magicpin", image: magicpin },
  { name: "Chowman", image: chowman },
];

export default function Partners() {
  return (
    <section
      id="about"
      className="flex min-h-68 w-full flex-col items-center justify-center py-8"
    >
      <div className="mb-8 flex w-full flex-col items-center px-5 text-center sm:w-1/2">
        <h2 className="my-4 text-3xl font-bold text-red-500 sm:text-4xl lg:text-5xl">
          Our Partners
        </h2>

        <p className="text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          molestiae.
        </p>
      </div>

      <div className="partners">
        <div className="partners-track">
          {[...partners, ...partners].map((partner, index) => (
            <img
              key={`${partner.name}-${index}`}
              src={partner.image}
              alt={partner.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
