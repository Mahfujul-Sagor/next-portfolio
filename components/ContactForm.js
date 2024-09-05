"use client"

import emailjs from '@emailjs/browser'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import {FiSend} from 'react-icons/fi'
import { MotionP } from './MotionP';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { MotionDiv } from './MotionDiv';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const validate = (e) => {
    let errors = {};
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault;
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }else {
      setErrors({});
      setIsSending(true);

      emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formData,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      ).then((response)=> {
        toast.success('Message sent successfully');
        setFormData({name: '', email: '', message: ''});
      }).catch((error)=> {
        console.log('FAILED...', error);
        toast.error('Failed to send message');
      }).finally(()=> {
        setIsSending(false);
      })
    }
  };

  return (
    <div className='p-4 w-full md:w-[75%]' id='contact'>
      <Toaster/>
      <h2 className='my-8 text-center text-4xl font-semibold tracking-tighter'>Let&apos;s Connect</h2>
      <MotionDiv
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.2}}
      >
        <form onSubmit={handleSubmit}>
          <div className='mb-4 flex flex-col gap-4'>
            <div className='w-full'>
              <Input type="text" id='name' name='name' value={formData.name} placeholder='Name' onChange={handleChange} className='w-full'  />
              {errors.name && (
                <MotionP
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                className='text-sm text-rose-800'>{errors.name}</MotionP>
              )}
            </div>
            <div className='w-full'>
              <Input type="email" id='email' name='email' value={formData.email} placeholder='Email' onChange={handleChange} className='w-full'  />
              {errors.email && (
                <MotionP
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                className='text-sm text-rose-800'>{errors.email}</MotionP>
              )}
            </div>
          </div>
          <div className='mb-4'>
            <Textarea id='message' name='message' value={formData.message} placeholder='Message' onChange={handleChange} className='w-full' rows='6'  />
            {errors.message && (
              <MotionP
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              className='text-sm text-rose-800'>{errors.message}</MotionP>
            )}
          </div>
          <Button variant='secondary' type='submit' className={`mb-8 w-full ${isSending ? "cursor-not-allowed opacity-50" : ""}`} disabled={isSending}>
            <div className='flex items-center justify-center gap-2'>
              {isSending ? "Sending..." : "Send"}
              <FiSend/>
            </div>
          </Button>
        </form>
      </MotionDiv>
    </div>
  )
}

export default ContactForm