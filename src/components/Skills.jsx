import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { motion } from 'framer-motion';

const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    },
})

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiExpress className='text-7xl text-slate-800'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoNodejs className='text-7xl text-green-600'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <BiLogoTailwindCss className='text-7xl text-cyan-400'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiPostman className='text-7xl text-orange-400' />
        </motion.div>
        
      </div>
    </div>
  )
}

export default Technologies
