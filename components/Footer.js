import React from 'react'
import { SOCIAL_MEDIA_LINKS } from '@/constants/index'
import { MotionDiv } from './MotionDiv'
import { MotionA } from './MotionA'

const Footer = () => {

  const date = new Date().getFullYear();

  return (
    <div className='mb-8 mt-20'>
      <div className="flex items-center justify-center text-2xl font-bold">
        <MotionDiv
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5}}
        className='mb-1'
        >
          Mahfujul Sagor
        </MotionDiv>
      </div>
      <div className="flex items-center justify-center gap-6 md:gap-8">
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
      <p className='mt-8 text-center text-xs sm:text-sm tracking-wide'>&copy; {date} compileTab. All rights reserved.</p>
    </div>
  )
}

export default Footer