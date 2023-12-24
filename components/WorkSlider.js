// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/criptos.png',
          link: 'https://laverde-cotizador-criptomonedas.netlify.app/'
        },
        {
          title: 'title',
          path: '/pacientes.png',
          link: 'https://laverde-registro-pacientes.netlify.app/'
        },
        {
          title: 'title',
          path: '/guitarras.png',
          link: 'https://guitar-la-next-cmhxqodun-ccclaverde.vercel.app/'
        },
        {
          title: 'title',
          path: '/pokemon3.png',
          link: 'https://pokemon-static-next-js-six.vercel.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/pokemon3.png',
          link: 'https://pokemon-static-next-js-six.vercel.app/'
        },
        {
          title: 'title',
          path: '/criptos.png',
          link: 'https://laverde-cotizador-criptomonedas.netlify.app/'
        },
        {
          title: 'title',
          path: '/pacientes.png',
          link: 'https://laverde-registro-pacientes.netlify.app/'
        },
        {
          title: 'title',
          path: '/guitarras.png',
          link: 'https://guitar-la-next-cmhxqodun-ccclaverde.vercel.app/'
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  BsArrowRight
} from "react-icons/bs";

// import Swiper core and required modules
import Image from "next/image";
import { Pagination } from "swiper";


const WorkSlider = () => {
  return(
    <Swiper
     spaceBetween={10}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return <SwiperSlide key={index} >
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => {
              return (
                <div 
                  key={index}
                  className="relative rounded-lg overflow-hidden flex intems-center justify-center group"
                >
                  <a href={image.link} target="_blank" rel="noopener noreferrer" >
                  
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* image */}
                   
                    <Image
                      src={image.path}
                      alt=""
                      width={500}
                      height={300}
                    />
                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    {/* Title */}
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* title part 1 */}
                        <div className="delay-100">LIVE</div>
                        {/* title part 2 */}
                        <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT</div>
                        {/* icon*/}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transtion-all duration-300 delay-200"><BsArrowRight/></div>
                      </div>
                    </div>
                </div>
                </a>
              </div>
      )}) }
          </div>
          </SwiperSlide>
        
      })}
    </Swiper>
)
};

export default WorkSlider;

