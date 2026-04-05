import React from 'react'
import Link from 'next/link'
import { Caveat } from 'next/font/google'


const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})

export const Logo = () => {
  return (
    <Link href="/">
         <div className={`${caveat.className} w-fit text-center p-10`}>
        <h2 className='text-4xl'>Elins Glada</h2>
        <h2 className='text-lg '>Ekologiska Kor</h2>
    </div>
    </Link>
   
  )
}
