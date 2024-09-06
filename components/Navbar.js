"use client"

import React, { useState } from 'react'
import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/constants/index.js';
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa6';
import { ModeToggle } from './ModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior:"smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav className='fixed top-4 left-0 right-0 z-50 px-2'>
        {/* Desktop menu */}
        <div className='mx-auto hidden max-w-3xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/30 py-3 backdrop-blur-lg lg:flex'>
          <div className='flex items-center justify-between gap-6'>
            <div>
              <Link href='#home' onClick={(e)=> handleLinkClick(e, item.href)} className='font-bold text-2xl'>
                Mahfujul Sagor
              </Link>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index)=> (
                  <li key={index}>
                    <Link href={item.href} className='text-md' onClick={(e)=> handleLinkClick(e, item.href)}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <ModeToggle/>
          </div>
        </div>
        {/* Mobile menu */}
        <div className='rounded-lg lg:hidden max-w-3xl py-3 px-4 mx-auto border border-stone-50/30 bg-black/30 backdrop-blur-lg'>
          <div className='flex items-center justify-between'>
            <div>
              <Link href='#home' onClick={(e)=> handleLinkClick(e, item.href)} className='font-bold text-xl sm:text-2xl'>
                Mahfujul Sagor
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <ModeToggle/>
              <button className='focus:outline-none lg-hidden' onClick={toggleMenu}>
                {isOpen ? (
                  <FaTimes className='m-2 h-6 w-5'/>
                ) : (
                  <FaBars className='m-2 h-6 w-5'/>
                )}
              </button>
            </div>
          </div>
          {isOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4">
              {NAVIGATION_LINKS.map((item, index)=> (
                  <li key={index}>
                    <Link href={item.href} className='text-md' onClick={(e)=> handleLinkClick(e, item.href)}>{item.label}</Link>
                  </li>
                ))}
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar
