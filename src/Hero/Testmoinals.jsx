// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
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
    <div className="flex justify-center items-center w-full h-full mt-4 mb-16">
      <div className="flex flex-col justify-center items-center text-center content w-2/3 ">
        <h1 className="text-4xl font-bold my-12">What Our Customers Say</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((item) => {
            return (
              <SwiperSlide>
                <div className="flex flex-col text-left p-4 border border-gray-400 rounded-lg bg-gray-100 shadow-lg  shadow-orange-500">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <img
                        key={index}
                        className="w-6! h-6! "
                        src={index < item.rating ? star : starOutline}
                        alt=""
                      />
                    ))}
                  </div>
                  <div className="text-[15px] py-4">{item.text}</div>
                  <div className="text-red-500">{item.name}</div>
                  <div>CEO, Website Builders</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
