import { BIO } from '@/constants'
import React from 'react'
import { MotionH } from './MotionH';
import { MotionDiv } from './MotionDiv';
import { MotionP } from './MotionP';


const Bio = () => {
  return (
    <section className='max-w-4xl flex flex-col gap-12 pt-20' id='bio'>
      <MotionH
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className='text-center text-3xl font-semibold lg:text-4xl'>Bio</MotionH>
      <MotionDiv
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8, delay: 0.2}}
      >
        {BIO.map((bio, index)=> (
          <MotionP 
          initial={{opacity: 0, x: -20}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.5, delay: index * 0.2}}
          key={index} className='mb-4 text-lg lg:text-xl'>{bio}</MotionP>
        ))}
      </MotionDiv>
    </section>
  )
}

export default Bio;