import React from 'react'
import logo from '@/public/logo.png'
import Image from 'next/image'
import { SOCIAL_MEDIA_LINKS } from '@/constants/index'
import { MotionDiv } from './MotionDiv'
import { MotionA } from './MotionA'

const Footer = () => {
  return (
    <div className='mb-8 mt-20'>
      <div className="flex items-center justify-center">
        <MotionDiv
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5}}
        >
          <Image src={logo} alt='logo' width={200} className='my-20'/>
        </MotionDiv>
      </div>
      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index)=> (
          <MotionA 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.2, delay: index * 0.1}}
          key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
            {link.icon}
          </MotionA>
        ))}
      </div>
      <p className='mt-8 text-center text-sm tracking-wide text-gray-400'>&copy;compileTab. All rights reserved.</p>
    </div>
  )
}

export default Footer