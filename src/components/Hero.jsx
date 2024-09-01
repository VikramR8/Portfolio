import React from 'react'
import { HERO_CONTENT } from '../constants';
import profile from '../assets/Profile.png';
import { motion } from 'framer-motion';

const container=(delay)=>({
    hidden:{x:-100, opacity:0},
    visible:{x:0, opacity:1, transition:{duration:0.5, delay:delay}}
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start pl-12 pt-24'>
                    <motion.h1
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl '>Vikram Reshmi</motion.h1>
                    <motion.span
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className='bg-gradient-to-r from-violet-600 via-slate-500 to-cyan-500 bg-clip-text text-4xl tracking-tight text-transparent'>Web Developer</motion.span>
                    <motion.p 
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter text-justify'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img src={profile} alt='Profile' 
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:1, delay:1.2}}
                    className='w-[450px] h-[450px] rounded-2xl'></motion.img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
