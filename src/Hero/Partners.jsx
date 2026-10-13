import swiggy from "../assets/swiggy.png";
import zomato from "../assets/zomato.png";
import magicpin from "../assets/magicpin.png";
import chowman from "../assets/Chowman-Logo.png";

export default function Partners() {
  const partners = [
    { id: 1, name: "Swiggy", img: swiggy },
    { id: 2, name: "Zomato", img: zomato },
    { id: 3, name: "Magicpin", img: magicpin },
    { id: 4, name: "Chowman", img: chowman },
  ];

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-white py-12 sm:py-16"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center text-center">
          <h2 className="my-3 text-3xl font-bold text-red-500 sm:text-4xl lg:text-5xl">
            Our Partners
          </h2>

          <p className="text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            molestiae.
          </p>
        </div>

        {/* Partners Logos */}
        <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-4 sm:gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex h-24 items-center justify-center px-2 sm:h-28"
            >
              <img
                src={partner.img}
                alt={partner.name}
                loading="lazy"
                className="max-h-16 w-full max-w-[150] object-contain transition duration-300 hover:scale-105 sm:max-h-20 sm:max-w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
