import {

} from 'react-icons/rx';

export const seviceData = [

]

import ServiceSlider from '../../components/ServiceSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles'; 

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants'

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles/>
      <div className='container mx-auto'>
        <div>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <h2 className='h2 xl:mt-8'>
              My services <span className='text-accent'>.</span>
              </h2>
              <p className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
                I am a full-stack developer and I am proficient in a wide range of technologies. I can help you with your next project.
              </p>
          </div>
          {/* slider */}
          <ServiceSlider/>
        </div>
      </div>
      <Bulb/>
    </div>
  )
};

export default Services;
