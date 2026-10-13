import Peporoni from "../assets/pizza1.png";
import Sushi from "../assets/pizza2.png";
import Margarita from "../assets/pizza3.png";

export default function Card() {
  const Menu = [
    {
      id: 1,
      title: "Peporoni Pizza",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor explicabo est assumenda.",
      img: Peporoni,
    },
    {
      id: 2,
      title: "Sushi Pizza",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor explicabo est assumenda.",
      img: Sushi,
    },
    {
      id: 3,
      title: "Margarita Pizza",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor explicabo est assumenda.",
      img: Margarita,
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Menu.map((item) => (
        <article
          key={item.id}
          className="flex min-w-0 flex-col items-center rounded-2xl bg-white p-5 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
        >
          {/* Dish Image */}
          <img
            src={item.img}
            alt={item.title}
            className="aspect-square w-full max-w-[280px] object-contain"
          />

          {/* Dish Details */}
          <div className="flex flex-1 flex-col items-center text-center">
            <h3 className="mt-4 text-xl font-bold text-gray-900">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base">
              {item.des}
            </p>

            <button className="mt-6 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
              Order Now
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
