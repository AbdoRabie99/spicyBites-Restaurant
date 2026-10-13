import Card from "./Card";

export default function Menu() {
  return (
    <section
      id="menu"
      className="min-h-screen w-full bg-gray-800 py-12 sm:py-16"
    >
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold text-red-400 sm:text-4xl">
            Popular Dishes
          </h2>

          <p className="max-w-2xl text-base leading-7 text-gray-200 sm:text-xl">
            Check out our most popular and highly-rated dishes
          </p>
        </div>

        {/* Menu Cards */}
        <Card />
      </div>
    </section>
  );
}
