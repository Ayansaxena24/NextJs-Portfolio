// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Nyaya Sanchalak",
          path: "/Nyaya1.jpg",
          url: "https://github.com/Ayansaxena24/Nyaya-Sanchalak"
        },
        {
          title: "title",
          path: "/Nyaya2.jpg",
          url: "https://github.com/Ayansaxena24/Nyaya-Sanchalak"
        },
        {
          title: "title",
          path: "/Nyaya3.jpg",
          url: "https://github.com/Ayansaxena24/Nyaya-Sanchalak"
        },
        {
          title: "title",
          path: "/Nyaya4.jpg",
          url: "https://github.com/Ayansaxena24/Nyaya-Sanchalak"
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/calmspace3.jpg",
          url: "https://github.com/Ayansaxena24/Calm-Space"
        },
        {
          title: "title",
          path: "/calmspace2.jpg",
          url: "https://github.com/Ayansaxena24/Calm-Space"
        },
        {
          title: "title",
          path: "/calmspace4.jpg",
          url: "https://github.com/Ayansaxena24/Calm-Space"
        },
        {
          title: "title",
          path: "/calmspace.jpg",
          url: "https://github.com/Ayansaxena24/Calm-Space"
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
          url: "https://ayansaxena24.github.io/projectdh/"
        },
        {
          title: "title",
          path: "/thumb1.jpg",
          url: "https://ayansaxena24.github.io/projectdh/"
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          url: "https://ayansaxena24.github.io/projectdh/"
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          url: "https://ayansaxena24.github.io/projectdh/"
        },
      ],
    },
    {
      images: [
        {
          title: "Job Hive",
          path: "/thumb1.jpg",
          url: "https://job-hive.vercel.app/"
        },
        {
          title: "title",
          path: "/thumb2.jpg",
          url: "https://job-hive.vercel.app/"
        },
        {
          title: "title",
          path: "/thumb3.jpg",
          url: "https://job-hive.vercel.app/"
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          url: "https://job-hive.vercel.app/"
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { BsArrowRight } from "react-icons/bs";

//import required modules
import { Pagination } from "swiper";
import Image from "next/image";

const WorkSlider = ({ onSlideChange }) => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[220px] sm:h-[480px]"
      onSlideChange={(swiper) => onSlideChange(swiper.activeIndex)}
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <a
                    href={image.url ? image.url : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                  >
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                      <div className="flex items-center justify-center relative overflow-hidden group">
                        {/* image */}
                        <Image
                          src={image.path}
                          alt={image.title}
                          width={500}
                          height={300}
                        />
                        {/* overlay content */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1*/}
                            <div className="delay-100">LIVE</div>
                            {/* title part 2*/}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
