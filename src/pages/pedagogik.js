import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Caveat } from 'next/font/google'
import {TopHead} from '@/components/header/TopHead'
import {Footer} from '@/components/footer/Footer'

import item1 from '@/assets/cow-bottle.jpg'
import item2 from '@/assets/cows-young.jpg'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
})


export default function Pedagogik() {
  return (
    <>
    <TopHead />
    <main className='bg-sand flex flex-col md:flex-row md:justify-start py-10 pt-20'>
      <div className='mx-10 md:w-1/2'>
        <h1 className={`text-center ${caveat.className} text-4xl py-10`}>Om Gården</h1>
        <Image
          src={item1}
          alt="ko med mjölkflaska" 
          width={800}
          height={800}
          className="w-full p-10"
      /> 
        <p className=' pb-4'>
        Till gården hör ca 30 ha skog, 30 ha egen mark samt att jag arrenderar granngården på ca 25ha. Gården har drivits ekologiskt sedan -96. Här finns ca 26-30 kor och ca 30st kalvar och kvigor. Så totalt finns det ca 55 – 60 djur på gården året om. Alla kvigkalvar som föds stannar kvar på gården medans tjurkalvarna säljs vidare till en bonde i Alunda när dem är avvanda vid 3 månaders ålder.
        </p>
        <p className='pb-4'>
        När mina kor kalvar får de komma in i en kalvningsbox några dagar innan de ser ut att kalva. När kon har fått sin kalv låter jag kalven gå kvar i 7 dagar sedan skiljer jag kalven från kon. I samma stund blir ”jag” kalvens mamma då det är mig kalven får mjölken av. Kalven skriker alltså inte efter kon eftersom kalven är mätt. Kon brukar ropa efter kalven ca 2-3 dagar efter kalven men får inget svar eftersom kalven får sin mjölk från mig.
        </p>
        <p className='pb-4'>
        Alla kalvar får ca 10 liter mjölk varje dag i 3 månader plus att dem alltid har fri tillgång på hö eller ensilage.
        </p>
        <p className='pb-4'>
        Här finns även höns, ett gäng ladugårdskatter, 2 hästar Chocco och Pål. På gården finns även en glad boxer Sune som alltid är med mig i vått och torrt. Han kommer med stor sannolikhet och Välkomnar er när ni besöker gården.
        </p>
        <p className='pb-4'>
        Eftersom mina kor står uppbundna under vinterhalvåret har jag en regel att följa och som alla gårdar som är KRAV/Ekologiska måste följa nämligen rastning. Detta gäller ”små gårdar med upp till 42 godkända uppbundna ko platser”.
        </p>
        <p className='pb-4'>
        Så 2 ggr/v släpper jag ut dem så dem får skutta runt en stund. Det här är en aktivitet som jag brukar bjuda in allmänheten till.
        </p>
        <p className='pb-4'>
        Detta är ngt som ARLA sätter stopp för 1/10-24.Då kommer inte dem att hämta mjölk från EKO gårdar där korna står uppbundna. Jag förklarar detta mer ”Mitt Gräddprojekt”
        </p>
        <p className='pb-4'>
        Så fort det går helst i mitten av april åker kor och kvigor ut för att sedan få vara ute dygnet runt ända till sen hösten. Direkt i början fodras djuren ute tills betet kommit igång ordentligt. Sen när värmen kommit släpper jag även ut småkalvarna. Min filosofi är att alla djur ska komma ut så fort det går på våren för att sen kunna vara ute långt in på hösten.
        </p>
      
        <Image
            src={item2}
            alt="Kalvar i spiltan" 
            width={800}
            height={800}
            className="w-full p-10"
        />
      </div>
    </main>

    <Footer />
  </>

  )
}
