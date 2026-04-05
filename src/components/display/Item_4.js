import React from 'react'
import Image from 'next/image'
import { Caveat } from 'next/font/google'


import item from '@/assets/cow-event.jpg'
import { ReadMoreButton } from '@/components/utils/ReadMoreButton'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })



export const Item4 = () => {
    return (
        <div className='flex flex-col w-full p-8 md:flex-wrap md:flex-row md:flex-row-reverse justify-center'>
            <div className='md:w-6/12 flex items-center justify-center'>
            <Image
                src={item.src}
                width={800}
                height={800}
                alt="burkar med färg" 
                className="w-[500px] top-0 left-0 object-cover rounded-2xl"
            />
            </div>
            <div className='md:w-6/12'> 
            <div className='flex flex-col p-4'>
                <h2 className={`text-4xl p-8 text-center  ${caveat.className}`}>
                    Event
                </h2>
                <p>
                Nyfiken på hur det känns att göra egen ost, klappa en ko eller följa med mig ut i ladugården? Här hittar du presentkorten som bjuder på dofter, skratt, mjölk, maskiner och minnen att ta med hem. Välj din favoritupplevelse – eller ge bort en till någon som behöver lite lantluft i själen.
                </p>
            </div>
                <ReadMoreButton link={'miljo'} />
        </div>
    
        </div>
      )
}
