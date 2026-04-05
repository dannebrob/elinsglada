import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'


import item from '@/assets/about-farm.jpg'
import { ReadMoreButton } from '@/components/utils/ReadMoreButton'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })



export const Item1 = () => {
 
  return (
    <div className='bg-lightSand flex flex-col w-full p-8 md:flex-wrap md:flex-row'>
        <div className='md:w-6/12 flex items-center justify-center'>
        <Image
            src={item.src}
            width={800}
            height={800}
            alt="Våran kock lagar mat med barns" 
            className="w-[500px] md:max-w-md top-0 left-0 object-cover rounded-2xl"
        />
        </div>
        <div className='md:w-6/12 pl-4'> 
        <div className=' flex flex-col p-4'>
            <h2 className={`text-4xl p-8 text-center  ${caveat.className}`}>Om Gården</h2>
            <p>
              Hur ser livet ut på en ekologisk gård med 60 hektar mark, 60 djur och två boxrar som heter Sune och Bosse? Följ med och upptäck vardagen bakom ladugårdsdörren.
            </p>
        </div>
           <ReadMoreButton link={'pedagogik'} />
        </div>

    </div>
  )
}
