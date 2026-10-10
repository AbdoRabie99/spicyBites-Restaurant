import swiggy from "../assets/swiggy.png";
import zomato from "../assets/zomato.png";
import magicpin from "../assets/magicpin.png";
import chowman from "../assets/Chowman-Logo.png";

export default function Partners() {
  return (
    <div
      id="about"
      className="flex justify-center items-center flex-col w-full h-68"
    >
      <div className="flex justify-center items-center flex-col w-1/2 mb-8">
        <h1 className="text-5xl font-bold text-red-500 my-4">Our Partners</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          molestiae.
        </p>
      </div>
      <div className="partners flex justify-center items-center w-full">
        <img src={swiggy} alt="" />
        <img src={zomato} alt="" />
        <img src={magicpin} alt="" />
        <img src={chowman} alt="" />
      </div>
    </div>
  );
}
