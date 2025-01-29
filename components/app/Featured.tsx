import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import MaxWidthWrapper from '../MaxWidthWrapper'

const Featured = () => {
  return (
    <MaxWidthWrapper>
        <div className='mt-8'>
            <h1 className="text-7xl">
                <b>Hey, iftekhar here!</b> Discover my stories and creative ideas
            </h1>
            <div className="mt-16 flex items-center gap-12">
                <div className="flex-1 h-[500px] relative">
                    <Image src={"/1.png"} alt='' fill={true} className='object-cover'/>
                </div>
                <div className='flex-1 flex flex-col gap-6'>
                    <p className='text-3xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, odio.</p>
                    <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, doloremque quisquam. Unde, ducimus tempora! Illum asperiores ut dignissimos velit, quas enim hic debitis aliquid aspernatur vel quos cupiditate obcaecati possimus.</p>
                    <Button variant={"outline"} className='w-1/3'>Read more</Button>
                </div>
            </div>
        </div>
    </MaxWidthWrapper>
  )
}

export default Featured