import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import pizza from "../assets/pizza.webp";
import time from "../assets/time.png";
import star from "../assets/star.png";
import starOutline from "../assets/star-outline.png";

export default function Hero() {
  return (
    <section id="home" className="w-full overflow-hidden bg-amber-50">
      <div className="container mx-auto grid min-h-[600] grid-cols-1 items-center gap-10 py-12 sm:py-16 lg:min-h-[650px] lg:grid-cols-2 lg:gap-8 lg:py-10">
        {/* Left Side */}
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          {/* App Stores */}
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <img
              className="w-28 sm:w-32"
              src={playstore}
              alt="Get it on Google Play"
            />
            <img
              className="w-28 sm:w-32"
              src={appstore}
              alt="Download on the App Store"
            />
          </div>

          {/* Text Content */}
          <div className="mt-6 flex w-full flex-col gap-4">
            <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
              <span className="mr-2 text-red-500">Delicious</span>
              Meals Delivered to Your Doorsteps.
            </h1>

            <p className="max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
              Discover a world of culinary delights with our food delivery
              service. Enjoy fast, reliable delivery and a wide selection of
              mouthwatering dishes.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex w-full flex-wrap justify-center gap-3 lg:justify-start">
            <button className="rounded-2xl bg-red-500 px-5 py-3 font-semibold text-white transition hover:bg-red-600 sm:px-7">
              Order Now
            </button>

            <button className="rounded-2xl border-2 border-red-400 px-5 py-3 font-semibold text-red-500 transition hover:bg-red-50 sm:px-7">
              Contact Now
            </button>
          </div>
        </div>

        {/* Right Side - Pizza */}
        <div className="relative mx-auto w-full max-w-[500px] min-w-0 px-4 sm:px-8 lg:max-w-none lg:px-0">
          {/* Pizza Image */}
          <img
            className="rotate-360 mx-auto w-full max-w-[420px] object-contain lg:max-w-full"
            src={pizza}
            alt="Delicious pizza"
          />

          {/* Fast Delivery Badge */}
          <div className="absolute bottom-[8%] right-0 flex max-w-[155px] items-center gap-2 rounded-full bg-amber-50 p-3 text-xs font-bold shadow-xl sm:right-2 sm:max-w-[175px] sm:p-4 sm:text-sm lg:-right-2">
            <img className="w-8 shrink-0 sm:w-10" src={time} alt="" />
            <p>Super Fast Delivery</p>
          </div>

          {/* Rating Badge */}
          <div className="absolute right-0 top-0 flex flex-col items-center rounded-full bg-amber-50 p-3 font-bold shadow-xl sm:right-4 sm:p-4 lg:right-4">
            <p className="text-sm sm:text-base">Good Rating</p>

            <div className="flex">
              <img className="w-4 sm:w-6" src={star} alt="" />
              <img className="w-4 sm:w-6" src={star} alt="" />
              <img className="w-4 sm:w-6" src={star} alt="" />
              <img className="w-4 sm:w-6" src={star} alt="" />
              <img className="w-4 sm:w-6" src={starOutline} alt="" />
            </div>
          </div>

          {/* Restaurants Badge */}
          <div className="absolute left-0 top-[35%] flex flex-col items-center rounded-full bg-amber-50 p-3 font-bold shadow-xl sm:left-2 sm:p-4 lg:-left-4">
            <p className="text-lg sm:text-xl">100+</p>
            <p className="text-xs sm:text-sm">Restaurants</p>
          </div>
        </div>
      </div>
    </section>
  );
}
