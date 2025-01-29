"use client"
import React from 'react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { navLinks, siteName } from '@/lib/constants';
import { Menu } from "lucide-react"
import { ModeToggle } from '../ToggleMode';

const Navbar = () => {
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-gray-200 bg-white/75 backdrop-blur-lg transition-all dark:bg-black">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            <span>{siteName}</span>
          </Link>

          
          <div className='flex flex-row space-x-4'>
            <div className="hidden items-center space-x-4 sm:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={buttonVariants({
                    variant: link.variant,
                    size: 'sm',
                  })}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex justify-start">
              <ModeToggle />
            </div>

          <div className="sm:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Bloggy</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={buttonVariants({
                        variant: link.variant,
                        size: 'sm',
                        className: 'w-full',
                      })}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
          
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;