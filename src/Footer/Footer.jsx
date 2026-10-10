import { Mail, MapPin, Phone } from "lucide-react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <div className="flex justify-center items-center w-full bg-amber-50 py-4">
      <div className="grid grid-cols-4 justify-center w-4/5">
        <div>
          <h1 className="text-red-400 text-xl font-semibold">Quick Links</h1>
          <ul className="flex flex-col text-left gap-2 mt-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-red-400 text-xl font-semibold">Contact Us</h1>
          <div className="flex  flex-col gap-4">
            <div className="flex w-48 mt-4">
              <MapPin className="w-10 h-10 mr-2" />
              <p>123 Restaurant Street City, State 12345</p>
            </div>
            <div className="flex w-48">
              <Phone className="mr-2" />
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="flex w-60">
              <Mail className="mr-2" />
              <p>Email: info@restaurant.com</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-red-400 text-xl font-semibold">Opening Hours</h1>
          <div className="flex flex-col gap-4 mt-4">
            <p>Monday - Friday: 11am-10pm</p>
            <p>Saturday - Sunday: 10am-11pm</p>
          </div>
        </div>
        <div>
          <h1 className="text-red-400 text-xl font-semibold">Follow Us</h1>
          <div className="flex gap-4 mt-4">
            <img className="w-12" src={facebook} alt="" />
            <img className="w-12" src={instagram} alt="" />
            <img className="w-12" src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
