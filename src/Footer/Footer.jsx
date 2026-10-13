import { Mail, MapPin, Phone } from "lucide-react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

export default function Footer() {
  return (
    <footer className="w-full bg-amber-50 py-10 sm:py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-red-400">Quick Links</h2>

            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a className="transition hover:text-red-500" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-500" href="#menu">
                  Menu
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-500" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="transition hover:text-red-500" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="min-w-0">
            <h2 className="text-xl font-semibold text-red-400">Contact Us</h2>

            <div className="mt-4 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0" />
                <p className="break-words">
                  123 Restaurant Street City, State 12345
                </p>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0" />
                <p>Phone: (123) 456-7890</p>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0" />
                <p className="break-words">Email: info@restaurant.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h2 className="text-xl font-semibold text-red-400">
              Opening Hours
            </h2>

            <div className="mt-4 flex flex-col gap-4">
              <p>Monday - Friday: 11am-10pm</p>
              <p>Saturday - Sunday: 10am-11pm</p>
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h2 className="text-xl font-semibold text-red-400">Follow Us</h2>

            <div className="mt-4 flex items-center gap-4">
              <a href="#" aria-label="Facebook">
                <img
                  className="h-8 w-8 object-contain transition hover:scale-110 sm:h-10 sm:w-10"
                  src={facebook}
                  alt="Facebook"
                />
              </a>

              <a href="#" aria-label="Instagram">
                <img
                  className="h-8 w-8 object-contain transition hover:scale-110 sm:h-10 sm:w-10"
                  src={instagram}
                  alt="Instagram"
                />
              </a>

              <a href="#" aria-label="Twitter">
                <img
                  className="h-8 w-8 object-contain transition hover:scale-110 sm:h-10 sm:w-10"
                  src={twitter}
                  alt="Twitter"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-amber-200 pt-5 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SpicyBites. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
