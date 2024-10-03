// data
// testimonial data
const testimonialSlider = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      "Working with Ayan was an absolute pleasure. His expertise and attention to detail consistently exceeded our expectations. He delivered exceptional results quickly, making the entire process seamless and stress-free. Highly recommended!",
  },
  {
    image: '/t-avt-3.png',
    name: 'Alex',
    position: 'Customer',
    message:
      "Ayan went above and beyond to ensure everything was perfect, and the results speak for himself. I couldn’t be more satisfied!",
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";


// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// icons
import { FaQuoteLeft } from "react-icons/fa";

//import required modules
import { Navigation, Pagination } from "swiper";
import Image from "next/image";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialSlider.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center">
                {/* avatar */}
                <div className="mb-2 mx-auto"><Image src={person.image} width={100} height={100} alt=""/></div>
                {/* name */}
                <div className="text-lg">{person.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
              </div>
            </div>
              {/* quote and message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* message */}
              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
