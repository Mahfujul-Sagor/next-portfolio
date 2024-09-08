import { EXPERIENCES } from '@/constants/index'
import React from 'react'
import { MotionH } from './MotionH'
import { MotionDiv } from './MotionDiv'


const WorkExperience = () => {
  return (
    <section className='pt-20' id='work'>
      <MotionH 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className='text-center text-4xl font-semibold tracking-lighter mb-12'>Work Experience</MotionH>
      <MotionDiv 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.5, delay: 0.2}}
      className='space-y-8'>
        {EXPERIENCES.map((experience, index)=> (
          <MotionDiv 
          initial={{opacity: 0, x: -20}}
          whileInView={{opacity: 1, x:0}}
          transition={{duration: 0.5, delay: index * 0.2}}
          key={index} className='rounded-xl border border-stone-50/30 p-4'>
            <h3 className='text-2xl font-semibold'>{experience.title}</h3>
            <p className='text-xl'>{experience.company}</p>
            <p className='text-sm text-stone-400'>{experience.duration}</p>
            <p className='mt-2 text-base'>{experience.description}</p>
          </MotionDiv>
        ))}
      </MotionDiv>
    </section>
  )
}

export default WorkExperience