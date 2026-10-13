import { Menu } from "lucide-react";
import logo from "../assets/chili-pepper.png";
import MenuItems from "./MenuItems";
import { useState } from "react";

export default function MyHeader() {
  const [open, setOpen] = useState(false);
  const openSideMenu = () => {
    setOpen(!open);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <>
      {/* Container */}
      <div className="w-full bg-orange-100 sticky z-500">
        <div className="container flex justify-between items-center m-auto p-4">
          <div className="flex shrink-0 items-center gap-2">
            <img
              src={logo}
              alt="SpicyBites logo"
              className="h-10 w-10 shrink-0 object-contain"
            />

            <h3 className="whitespace-nowrap text-base font-bold">
              <span className="text-red-500">Spicy</span>Bites
            </h3>
          </div>
          {/* Header Menu */}
          <div className="hidden md:block justify-between items-center">
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
          <div className="block md:hidden cursor-pointer">
            <Menu onClick={openSideMenu} />
          </div>
          {/* Mobile Menu */}
          {open && (
            <div
              className={`fixed top-[80] right-0 bottom-0 w-[300] bg-amber-50 p-4 md:hidden
              transition-transform duration-300 ease-in-out
              ${open ? "translate-x-0" : "translate-x-full"}`}
            >
              <MenuItems closeMenu={closeMenu} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
