"use client"
import React from 'react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { ToggleMode } from '../ToggleMode';

export const navLinks = [
  { href: '/', label: 'Home' }
];

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:bg-black">
        <div className='max-w-4xl mx-auto px-4'>
          <div className="flex h-14 items-center justify-between">
            <Link href="/" className="flex z-40 font-semibold">
              <span>Bloggy</span>
            </Link>

            
            <div className='flex flex-row space-x-4'>
              <div className="flex items-center space-x-4 sm:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={buttonVariants({
                      size: 'sm',
                      variant: "ghost"
                    })}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex justify-start">
                <ToggleMode />
              </div>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;