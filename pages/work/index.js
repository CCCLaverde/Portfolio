

import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles'; 

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

const Work = () => {
  return (
    <>
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles/>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2 
              className='h2 xl:mt-12'
              variants={fadeIn('up',0.2)}
              initial='hidden'
              animate='show'
              exit='heidden'
              >
              My Work <span className='text-accent'>.</span>
              </motion.h2>
              <motion.p 
                variants={fadeIn('up',0.4)}
                initial='hidden'
                animate='show'
                exit='heidden'
                className='mb-4 max-w-[400px] mx-auto lg:mx-0'
                >
               I am a software developer, primarily working with JavaScript and using frameworks such as React and Next.js on the front end. Additionally, I use Node.js to create APIs that can be consumed on the client side. I enjoy continuous learning, and currently, I am studying React Native and Java (Spring Boot).
              </motion.p>
          </div>
          {/* slider */}
          <motion.div
           className='w-full xl:max-w-[65%]'
           variants={fadeIn('down',0.6)}
           initial='hidden'
           animate='show'
           exit='heidden'
           >
          <WorkSlider/>
          </motion.div>
        </div>
      </div>
    </div>
    <div className="hidden xl:block">
      <Bulb/>
    </div>
    </>
  )
};

export default Work;
