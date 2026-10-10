import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import delivery from "../assets/delivery.json";

export default function Contact() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: delivery,
    });

    return () => anim.destroy(); // تنظيف الأنيميشن عند إغلاق المكون
  }, []);
  return (
    <>
      <div
        id="contact"
        className="flex flex-col justify-between items-center w-full"
      >
        <h1 className="text-4xl font-bold my-8 text-red-500">Contact Us</h1>
        <div className="flex justify-center items-center">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
            inventore.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 justify-center justify-items-center p-8">
          <div className="animation">
            <div ref={containerRef} className="w-full h-full" />
          </div>
          <form action="" className="bg-orange-100 mt-4 rounded-2xl p-4">
            <div className="flex items-center px-4 gap-4">
              <div className="firstName flex flex-col w-1/2 p-1">
                <label htmlFor="">First Name</label>
                <input type="text" className="bg-white mt-2" />
              </div>
              <div className="lastName flex-col min-w-1/2 p-1">
                <label htmlFor="">Last Name</label>
                <input type="text" className="bg-white mt-2 w-full" />
              </div>
            </div>
            <div className="flex flex-col px-4 ">
              <label htmlFor="">Email</label>
              <input type="text" className="bg-white p-1 mt-2 w-full" />
              <label htmlFor="">Phone Number</label>
              <input type="text" className="bg-white p-1 mt-2 w-full" />
              <label htmlFor="">Message</label>
              <textarea className="bg-white p-1 mt-2 w-full" rows="5" />
              <button className="bg-red-500 text-white p-1 my-8 rounded-2xl">
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
