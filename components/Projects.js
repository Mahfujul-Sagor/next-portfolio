import { PROJECTS } from '@/constants/index.js'
import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from'react-icons/md';
import { MotionDiv } from './MotionDiv';
import { MotionH } from './MotionH';
import { Button } from './ui/button';

const Projects = () => {
  return (
    <section className='pt-20' id='projects'>
      <MotionH 
      initial={{ opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className='mb-8 text-center text-3xl font-semibold lg:text-4xl'>Projects</MotionH>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {PROJECTS.map((project)=> (
          <MotionDiv 
          initial={{opacity: 0, scale: 0.9}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}}
          whileHover={{scale: 1.05}}
          key={project.id} className='rounded-3xl'>
            <div className='group relative overflow-hidden rounded-3xl'>
              <MotionDiv
              whileHover={{scale: 1.1}}
              className='object-cover transition-transform duration-500 group-hover:scale-110'>
                <Image src={project.image} priority={true} alt={project.name} className='h-full w-full object-cover'/>
              </MotionDiv>
              <MotionDiv
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.5}}
              >
              <div className='absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100'>
                  <h3 className='mb-2 text-xl'>{project.name}</h3>
                  <p className='mb-12 p-4'>{project.description}</p>
                  <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className=''>
                    <Button className="flex items-center">
                      <span>View on Github</span>
                      <MdArrowOutward />
                    </Button>
                  </a>
              </div>
              </MotionDiv>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  )
}

export default Projects;