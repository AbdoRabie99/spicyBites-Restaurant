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
    <div className="flex gap-6">
      {Menu.map((item) => {
        return (
          <div
            key={item.id}
            className="bg-white p-5 rounded-xl w-92 mt-12 flex justify-between items-center flex-col"
          >
            <img src={item.img} alt={item.title} className="w-4/5" />

            <div className="text-center p-4">
              <h2 className="text-xl font-bold">{item.title}</h2>

              <p>{item.des}</p>
            </div>

            <button className="bg-red-600 text-white px-4 py-2 rounded">
              Order Now
            </button>
          </div>
        );
      })}
    </div>
  );
}
