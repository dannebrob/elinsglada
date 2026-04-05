import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'


import item from '@/assets/cow-about.jpg'
import { ReadMoreButton } from '@/components/utils/ReadMoreButton'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })



export const Item2 = () => {
  return (
    <div className='flex flex-col w-full p-8 md:flex-wrap md:flex-row md:flex-row-reverse justify-center'>
        <div className='md:w-6/12 flex items-center justify-center'>
        <Image
            src={item.src}
            width={800}
            height={800}
            alt="Grönsaker på bänk"
            className="w-[500px] md:max-w-md top-0 left-0 object-cover rounded-2xl"
        />
        </div>
        <div className='md:w-6/12'> 
        <div className='flex flex-col p-4'>
            <h2 className={`text-4xl p-8 text-center  ${caveat.className}`}>Vem är Elin? </h2>
            <p>
           Vem blir man när man växer upp bland kor, syskonskara och impulsiva idéer? Följ med och upptäck hur en 5‑åring på gården blev bonden jag är idag.
            </p>
        </div>
            <ReadMoreButton link={'mat'}/>
        </div>

    </div>
  )
}
