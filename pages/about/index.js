import React, { useState } from "react";

import Circles from "../../components/Circles";
import { BsArrowRight } from 'react-icons/bs';

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";


// icons
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
import Bulb from "../../components/Bulb";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key='' />,
          <FaCss3 key='' />,
          <FaJs key=''/>,
          <FaReact key=''/>,
          <SiNextdotjs key=''/>,
          <FaNodeJs key=''/>
        ],
      }
    ],
  },

  {
    title: 'experience',
    info: [
      {
        title: 'Public accountant.',
        stage: '2020 - 2023',
      },
      {
        title: 'Web Developer.',
        stage: '2022 - 2023',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Public accountant - Politecnico gran colombiano',
        stage: '2020',
      },
      {
        title: 'Web development - Autodidact, multiple courses',
        stage: '2022',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-y-auto">
      <Circles />
      {/* avatar */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[118px] mb-11"
      >
        <Bulb />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            className="h2"
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Pursuing <span className="text-accent">Passions</span> and dreams with effort.</motion.h2>
          <motion.p
            className="max-w-[500] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 "
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            I am Cristian Castrillón Laverde, an accountant by profession and a developer by passion. I am currently 28 years old and I am Colombian. I have experience in the field of accounting, but I want to work as a software developer because it is my passion, and what better way to make a living than by doing what you love.
          </motion.p>
          {/* counters */}
          <motion.div
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            variants={fadeIn('right', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <div className="flex flex-1 xl:gap-x-6">

              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={1} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] mx-w-[100px]">
                  Years of experience
                </div>
              </div>
            </div>


            {/* Projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] mx-w-[100px]">
                Finished projects
              </div>
            </div>

          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex &&
                    'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              )
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* titlle */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className='flex gap-x-4' >
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div key={itemIndex} className="text-2xl text-white">{icon}</div>
                    })}
                  </div>
                </div>
              )
            })}
          </div>
          <a 
            href="https://drive.google.com/file/d/1q5Tk876CiSUEAb89tRRaQpPLhjoXdBzp/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <buttom className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group cursor-pointer mx-auto lg:mx-0'>

              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Go to the CV
              </span>

              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </buttom>
          </a>
        </motion.div>
      </div>
      <div>
        <p>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </p>
      </div>
    </div>
  )
};

export default About;
