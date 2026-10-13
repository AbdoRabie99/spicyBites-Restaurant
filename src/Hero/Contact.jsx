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

    return () => anim.destroy();
  }, []);

  return (
    <section
      id="contact"
      className="w-full overflow-hidden bg-white py-12 sm:py-16"
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="mb-4 text-3xl font-bold text-red-500 sm:text-4xl">
            Contact Us
          </h2>

          <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam,
            inventore.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Animation */}
          <div className="mx-auto h-[280px] w-full max-w-[420px] sm:h-[360px] lg:h-[420px] lg:max-w-none">
            <div ref={containerRef} className="h-full w-full" />
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full min-w-0 rounded-2xl bg-orange-100 p-4 sm:p-6 lg:p-8"
          >
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex min-w-0 flex-col">
                <label
                  htmlFor="firstName"
                  className="mb-2 font-medium text-gray-800"
                >
                  First Name
                </label>

                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  placeholder="Enter your first name"
                  className="w-full rounded-lg border border-gray-200 bg-white p-3 outline-none transition focus:border-red-500"
                />
              </div>

              <div className="flex min-w-0 flex-col">
                <label
                  htmlFor="lastName"
                  className="mb-2 font-medium text-gray-800"
                >
                  Last Name
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  placeholder="Enter your last name"
                  className="w-full rounded-lg border border-gray-200 bg-white p-3 outline-none transition focus:border-red-500"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-4 flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium text-gray-800">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="example@email.com"
                className="w-full rounded-lg border border-gray-200 bg-white p-3 outline-none transition focus:border-red-500"
              />
            </div>

            {/* Phone Number */}
            <div className="mt-4 flex flex-col">
              <label htmlFor="phone" className="mb-2 font-medium text-gray-800">
                Phone Number
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Enter your phone number"
                className="w-full rounded-lg border border-gray-200 bg-white p-3 outline-none transition focus:border-red-500"
              />
            </div>

            {/* Message */}
            <div className="mt-4 flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 font-medium text-gray-800"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows={5}
                className="w-full resize-y rounded-lg border border-gray-200 bg-white p-3 outline-none transition focus:border-red-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600 sm:w-auto"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
