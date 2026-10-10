import logo from "../assets/chili-pepper.png";

export default function MyHeader() {
  return (
    <>
      {/* Container */}
      <div className="w-full bg-orange-100 sticky top-0 z-10">
        <div className="flex justify-between items-center w-4/5 m-auto p-4">
          <div className="flex justify-center items-center w-12">
            <img src={logo} alt="" />
            <h3 className="font-bold text-md">
              <span className="text-red-500">Spicy</span>Bites
            </h3>
          </div>
          {/* Header Menu */}
          <div className="flex justify-between items-center">
            <ul className="flex gap-4 font-bold ">
              <li className="p-3">
                <a href="#home">Home</a>
              </li>
              <li className="p-3">
                <a href="#menu">Menu</a>
              </li>
              <li className="p-3">
                <a href="#about">About</a>
              </li>
              <li className="p-3">
                <a href="#contact">Contact</a>
              </li>
              <li className="bg-red-500 p-3 text-white rounded-2xl">
                <a href="">Order Now</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
