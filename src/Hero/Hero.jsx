import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import pizza from "../assets/pizza.webp";
import time from "../assets/time.png";
import star from "../assets/star.png";
import starOutline from "../assets/star-outline.png";

export default function Hero() {
  return (
    <>
      {/* Container */}
      <div id="home" className="w-full min-h-148 bg-amber-50 overflow-hidden">
        {/* MainContent */}
        <div className="flex justify-between items-center w-7xl mx-auto mt-16 min-h-148 p-8 ">
          {/* left Side */}
          <div className="flex flex-col ">
            <div className="flex justify-start">
              <img className="w-32" src={playstore} alt="playstore" />
              <img className="w-32" src={appstore} alt="appstore" />
            </div>
            <div className="w-160">
              <h1 className="text-6xl font-bold leading-tight p-2">
                <span className="text-red-500">Delicious</span>Meals Delivered
                to Your Doorsteps.
              </h1>
              <h1 className="text-gray-500">
                Discover a world of culinary delights with our food delivery
                service. Enjoy fast, reliable delivery and a wide selection of
                mouthwatering dishes
              </h1>
            </div>
            <div className="flex justify-start my-4">
              <button className="border-2 border-solid mx-2 bg-red-500 text-white p-4 rounded-2xl">
                Order Now
              </button>
              <button className="border-2 border-solid p-4 rounded-2xl text-red-400">
                Contact Now
              </button>
            </div>
          </div>
          {/* Right Side */}
          <div className="img relative">
            <img className="rotate-360 " src={pizza} alt="" />
            <div className="flex justify-center items-center absolute top-96 right-0 bg-amber-50 rounded-full w-40 shadow-xl font-bold p-4">
              <img className="w-10" src={time} alt="" />
              <p>Super Fast Delivery</p>
            </div>
            <div className="flex flex-col justify-center items-center absolute top-6 right-20 bg-amber-50 rounded-full shadow-xl w-40 font-bold p-4">
              <p>Good Rating</p>
              <div className="flex">
                <img className="w-6" src={star} alt="" />
                <img className="w-6" src={star} alt="" />
                <img className="w-6" src={star} alt="" />
                <img className="w-6" src={star} alt="" />
                <img className="w-6" src={starOutline} alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center absolute top-16 left-0 bg-amber-50 rounded-full shadow-xl w-40 font-bold p-4">
              <p>100+</p>
              <p>Restaurant</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
