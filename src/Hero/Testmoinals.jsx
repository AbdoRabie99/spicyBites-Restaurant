// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// Import required modules
import { FreeMode, Pagination } from "swiper/modules";

import star from "../assets/star.png";
import starOutline from "../assets/star-outline.png";

export default function Testmoinals() {
  const testimonials = [
    {
      id: 1,
      name: "Emily Johnson",
      rating: 5,
      text: "The flavors at this restaurant are absolutely incredible! Every dish I've tried has been a delightful experience.",
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      text: "Great food and excellent service. The staff was very attentive and knowledgeable about the menu.",
    },
    {
      id: 3,
      name: "Sarah Thompson",
      rating: 5,
      text: "This place is a hidden gem! The attention to detail in both the food presentation and taste is remarkable.",
    },
    {
      id: 4,
      name: "David Rodriguez",
      rating: 5,
      text: "I've been to many restaurants, but this one stands out. The ambiance, the service, and most importantly, the food are all top-notch.",
    },
    {
      id: 5,
      name: "Lisa Patel",
      rating: 4,
      text: "A wonderful dining experience! The fusion of flavors in their signature dishes is truly unique and delightful.",
    },
  ];

  return (
    <section className="w-full overflow-hidden py-10 sm:py-14 lg:py-16">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={16}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper pb-12!"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="h-auto!">
              <div className="flex h-full flex-col rounded-xl border border-gray-200 bg-gray-100 p-4 text-left shadow-lg shadow-orange-500/20 sm:p-6">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      className="h-5! w-5! sm:h-6! sm:w-6!"
                      src={index < item.rating ? star : starOutline}
                      alt=""
                    />
                  ))}
                </div>

                {/* Review */}
                <p className="flex-1 py-4 text-sm leading-6 text-gray-700 sm:text-base">
                  {item.text}
                </p>

                {/* Customer Name */}
                <h3 className="font-semibold text-red-500">{item.name}</h3>

                <p className="mt-1 text-sm text-gray-500">
                  CEO, Website Builders
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
