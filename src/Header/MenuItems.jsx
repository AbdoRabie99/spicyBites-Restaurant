import {
  Home,
  UtensilsCrossed,
  Info,
  Phone,
  X,
  Flame,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function MenuItems({ closeMenu }) {
  const links = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Our Menu", href: "#menu", icon: UtensilsCrossed },
    { name: "About Us", href: "#about", icon: Info },
    { name: "Contact", href: "#contact", icon: Phone },
  ];

  return (
    <div className="grid grid-cols-5 h-full max-w-[200]">
      <div className="col-span-1 flex items-center justify-center  ">
        <button
          onClick={closeMenu}
          aria-label="Close sidebar"
          className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-500 text-white transition hover:bg-red-600"
        >
          <ArrowLeft size={28} strokeWidth={2} />
        </button>
      </div>
      <div className="flex flex-col col-span-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500">
              <Flame size={25} className="text-black" />
            </div>

            <div>
              <h2 className="text-xl font-extrabold">
                <span className="text-red-500">Spicy</span>Bites
              </h2>
              <p className="text-xs text-gray-400">Taste the fire!</p>
            </div>
          </div>

          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="rounded-xl bg-white/10 p-2 transition hover:bg-red-500"
          >
            <X size={22} />
          </button>
        </div>

        {/* Welcome */}
        <div className="px-6 pb-5 pt-8">
          <p className="text-sm text-gray-700">WELCOME TO</p>
          <h3 className="mt-2 text-2xl font-bold">
            Your next favorite
            <span className="block text-red-500">meal awaits.</span>
          </h3>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-3">
          <p className="mb-4 px-3 text-xs font-bold uppercase tracking-[3px] text-gray-500">
            Navigation
          </p>

          <ul className="space-y-2">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-xl px-4 py-4 text-gray-700 transition-all duration-200 hover:translate-x-1 hover:bg-red-500 hover:text-black"
                  >
                    <span className="flex items-center gap-4">
                      <Icon size={21} />
                      <span className="font-semibold">{link.name}</span>
                    </span>

                    <ArrowRight
                      size={18}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Order Button */}
          <a
            href="#menu"
            onClick={closeMenu}
            className="mt-8 flex items-center justify-center gap-3 rounded-xl bg-red-500 px-5 py-4 font-bold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-600"
          >
            <UtensilsCrossed size={20} />
            Order Now
            <ArrowRight size={20} />
          </a>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-6">
          <p className="text-center text-sm font-medium text-gray-500">
            Made with ❤️ for food lovers
          </p>
          <p className="mt-2 text-center text-xs text-gray-700">
            © 2026 SpicyBites
          </p>
        </div>
      </div>
    </div>
  );
}
