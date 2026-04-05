import React from 'react'
import { Caveat } from 'next/font/google'
import Link from 'next/link'
import { Attention } from './header/Attention'

import Image from 'next/image'
import heroImg from '@/assets/hero-cow.jpg'

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
    display: 'swap',
  })

export const Hero = () => {
  console.log('// Denna sida skapades av Daniel Brobäck, mejla hej@danielbroback.se för mer information.')

  return (
    <section className='w-full pb-10 pt-20'>
    <Attention />
    <div className='w-full flex flex-col md:flex-wrap md:flex-row '>
      <div className='w-full md:w-1/2'>
      <Image 
    width={800} 
    height={800} 
    alt='Förskolan giraffen' 
    src={heroImg.src} 
    className='object-cover w-full h-full'
  />
      </div>
            <div className='flex flex-col px-8 md:w-1/2'>
            <h1 className={`${caveat.className} text-5xl py-8 text-center`}>Handla din mjölk direkt från mina kor och min gård</h1>
            
            <p>
            När DU väljer att köpa GRÄDDE MJÖLK KÖTT eller ett SKINN från mig och mina kor….då har DU gjort ett aktivt val.
            </p>
            <p className='py-2'>
            Då har DU har bidragit till ett ”litet jordbruks överlevnad” som i sin tur bidrar till ett ÖPPET LANDSKAP, BIOLOGISK MÅNGFALD,EN LEVANDE LANDSBYGD, ETT MILJÖVÄNLIGT JORDBRUK och framför allt en GLAD BONDE som kan fortsätta att driva sin gård vidare….. TACK
            </p>
            {/* <p className='py-2'>
            Vi har en åldersintegrerad barngrupp (1–5 år) vilket ger barnen många möjligheter att 
            lära sig av varandra. Tillsammans med pedagogerna skapar de en väldigt dynamisk och 
            naturlig grupp vilket främjar utveckling och sociala färdigheter. Läromiljön anpassas 
            också efter ålder och mognad genom indelningar för specifika aktiviteter och temaarbete. 
            Det sker i mindre grupper vilket främjar möjligheten till koncentration och förmågan att fokusera.
            </p> */}
            {/* <div className={`${caveat.className}`}>
            <p className='pt-4 font-bold text-start text-2xl'>På Giraffen har vi:</p>
            <ul className='text-start text-2xl'>
                <li>● Liten barngrupp</li>
                <li>● Hög personaltäthet</li>
                <li>● Kvalitetssäkrat pedagogiskt arbete</li>
                <li>● Fantastisk utemiljö</li>
                <li>● Mat som lagas på plats</li>
                <li>● Stort engagemang för barnen</li>
                <li>● Genomsyrande gemenskap och delaktighet</li>
                <li>● Insyn i verksamheten</li>
                <li>● Miljö- och hållbarhetstänk</li>
            </ul>
            </div> */}
            <div className='flex justify-center mt-8'>
            <Link href="/kontakt" className={`p-2 bg-green w-52 my-3 text-center rounded-lg text-2xl text-white  ${caveat.className}`}>Så köper du från min Mjölkbod</Link>
            </div>
            </div>
        </div>
    </section>
  )
}
