import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact
} from "react-icons/fa";

import {
  SiNextdotjs
} from "react-icons/si";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// import Swiper core and required modules
import { Pagination, FreeMode } from "swiper";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development with React',
    description: <FaReact className='text-4xl'/>,
  },
  {
    icon: <RxPencil2 />,
    title: 'Web Layout and more with HTML' ,
    description: <FaHtml5 className='text-4xl'/>,
  },
  {
    icon: <RxPencil2 />,
    title: 'Web styles and more with CSS' ,
    description: <FaCss3 className='text-4xl'/>,
  },
  {
    icon: <RxDesktop />,
    title: 'Development  with Next.js',
    description: <SiNextdotjs className='text-4xl'/>,
  },
  {
    icon: <RxRocket />,
    title: 'Backend and more with Node.js',
    description: <FaNodeJs className="text-4xl"/>,
  },
];

const ServiceSlider = () => {
  return(
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index} >
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65,169, 0.15)] transition-all duration-300">
              {/* icons */}
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              {/* title & desc */}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">{item.description}</p>
              </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"/>
                </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
)
};

export default ServiceSlider;
