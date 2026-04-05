import Link from 'next/link'
import React from 'react'

import { Caveat } from 'next/font/google'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

export const ReadMoreButton = ({link, text} ) => {


  // Use a default value for text in case it is undefined
  text = text || 'Läs mer';
  // Use a default value for link in case it is undefined
  link = link || '/';


  return (
    // render a div with tailwind that is centered
    <div className='mt-8 flex justify-center'>
    <Link href={link}>
        <div className={`p-2 bg-green w-36 text-center rounded-lg text-2xl text-white ${caveat.className}`}>{text}</div>
    </Link>
    </div>
  )
}
