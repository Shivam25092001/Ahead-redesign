'use client'
import React from 'react'
import { motion } from 'framer-motion';
import UI_Image from '../UI_Image/UI_Image';

const UI_Button = () => {
  return (
    <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            transition={{
                delay: 0.3,
                type: "spring",
                damping: 8,
                stiffness: 50
            }}
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className='flex justify-center items-center w-40 h-16 bg-black rounded-md cursor-pointer shadow-md '>
            <UI_Image
                src='/assets/apple.svg'
                width={35}
                height={35}
                alt="Logo"
            />
            <div className='flex flex-col flex-[0.9] text-white '>
                <p className='text-xs font-medium text-center'>Download on the</p>
                <p className='text-lg text-center font-semibold'>App Store</p>
            </div>

    </motion.div>
  )
}

export default UI_Button