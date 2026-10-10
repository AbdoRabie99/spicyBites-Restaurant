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

    return () => anim.destroy(); // تنظيف الأنيميشن عند إغلاق المكون
  }, []);

  return (
    <div className="w-full bg-amber-50 py-16">
      <div className="container mx-auto flex items-center justify-between gap-10 px-4">
        <div className="w-1/2 h-100 flex justify-center items-center">
          <div ref={containerRef} className="w-full h-full" />
        </div>

        <div className="w-1/2">
          <h1 className="text-xl font-bold text-amber-600">KEY FEATURES</h1>

          <p className="text-5xl font-bold my-2 w-3/4">
            Enjoy a Seamless <span className="text-amber-600">Ordering</span>{" "}
            Experience
          </p>

          <p className="text-gray-600">
            From fast delivery to a wide selection of cuisines, our food
            ordering service has everything you need to satisfy your cravings
          </p>
          <div className="flex mt-4">
            <img className="w-32" src={playstore} alt="playstore" />
            <img className="w-32" src={appstore} alt="appstore" />
          </div>
        </div>
      </div>
    </div>
  );
}
