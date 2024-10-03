// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";


// data
// export const serviceData = [
//   {
//     icon: <RxCrop />,
//     title: 'Branding',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     icon: <RxPencil2 />,
//     title: 'Design',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     icon: <RxDesktop />,
//     title: 'Development',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     icon: <RxReader />,
//     title: 'Copywriting',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
//   {
//     icon: <RxRocket />,
//     title: 'SEO',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   },
// ];
export const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'I create fast, responsive websites using modern technologies.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'I design visually appealing and user-friendly interfaces.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'I optimize websites to rank higher in search engines.',
  },
  {
    icon: <RxDesktop />,
    title: 'Frontend Development',
    description: 'Specializing in building interactive UI.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UI/UX Design',
    description: 'Enhancing user experience with intuitive designs.',
  },
];


//import required modules
import { FreeMode, Pagination } from 'swiper';

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group curson-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div>
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
              </div>
            </div>
          </SwiperSlide>
        );
      }
      )}
    </Swiper>
  );
};

export default ServiceSlider;
