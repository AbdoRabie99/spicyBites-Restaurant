import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import chefAnimation from "../assets/ChefAnimation.json";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

export default function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: chefAnimation,
    });

    return () => anim.destroy();
  }, []);

  return (
    <section className="w-full bg-amber-50 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto grid grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        {/* Animation */}
        <div className="mx-auto flex h-[280] w-full max-w-[420] items-center justify-center sm:h-[360] lg:h-[420] lg:max-w-none">
          <div ref={containerRef} className="h-full w-full" />
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="text-lg font-bold text-amber-600 sm:text-xl">
            KEY FEATURES
          </h2>

          <h3 className="my-3 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Enjoy a Seamless <span className="text-amber-600">Ordering</span>{" "}
            Experience
          </h3>

          <p className="max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            From fast delivery to a wide selection of cuisines, our food
            ordering service has everything you need to satisfy your cravings.
          </p>

          {/* App Store Images */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
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
        </div>
      </div>
    </section>
  );
}
