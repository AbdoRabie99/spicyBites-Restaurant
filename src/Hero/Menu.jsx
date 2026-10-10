import Card from "./Card";

export default function Menu() {
  return (
    <div id="menu" className="w-full bg-gray-800 min-h-screen">
      <div className="w-4/5  min-h-screen m-auto">
        <div className="flex justify-center items-center flex-col">
          <p className="text-4xl mt-8 mb-4 text-red-400 font-bold">
            Popular Dishes
          </p>
          <p className="text-xl text-gray-200">
            Check out our most popular and highly-rated dishes
          </p>
        </div>
        <div className="flex justify-center items-center">
          <Card />
        </div>
      </div>
    </div>
  );
}
