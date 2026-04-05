import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'


import item from '@/assets/milk-auto.jpg'
import { ReadMoreButton } from '@/components/utils/ReadMoreButton'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })



export const Item3 = () => {
  return (
    <div className='bg-lightSand flex flex-col w-full p-8 md:flex-wrap md:flex-row justify-center'>
        <div className='md:w-6/12 flex items-center justify-center'>
        <Image
            src={item.src}
            width={800}
            height={800}
            alt="Våran kock lagar mat med barn" 
            className="w-[500px] top-0 left-0 object-cover rounded-2xl max-h-[700px]"
        />
        </div>
        <div className='md:w-6/12 pl-4'> 
        <div className='flex flex-col p-4'>
            <h2 className={`text-4xl p-8 text-center  ${caveat.className}`}>Mjölkboden</h2>
            <p>
            Hur smakar mjölk när den är riktigt färsk – och hur funkar automaten egentligen? Följ med och upptäck hur du fyller, betalar och tar hem din egen liter.
            </p>
          
        </div>
            <ReadMoreButton link={'personalen'}/>
        </div>

    </div>
  )
}
