import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Circles from '/components/Circles';

import { motion } from 'framer-motion';

import { fadeIn } from '../../variants';

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if([name, email, message].includes('')) {
      return toast.error('All fields are mandatory!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } else{

      emailjs.sendForm('service_f9ieuc8', 'template_iz1fmmw', form.current, 'KS_TDBWE5BYruX83Y')
        .then((result) => {
            console.log(result.text);
            toast.success('Email sent!', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setName('');
            setEmail('');
            setMessage('');
        }, (error) => {
            console.log(error.text);
        });
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>
          {/* form */}
          <motion.form
            ref={form}
            onSubmit={sendEmail} 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* group */}
            <div className='w-full'>
              <input type='text' placeholder='name' className='input' name='user_name' value={name} onChange={ (e) => setName(e.target.value)} />
            </div>
              <input type='text' placeholder='Email' className='input' name='user_email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              <textarea placeholder='message' className='textarea' name='message' value={message} onChange={ (e) => setMessage(e.target.value)}></textarea>
              <input 
                type='submit'
                value='Send'
                className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group cursor-pointer'>

              </input>
              <ToastContainer />
          </motion.form>
        </div>
      </div>
      <Circles/>
    </div>
  )
};

export default Contact;
