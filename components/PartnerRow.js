import Link from '../components/Link'
import Image from 'next/image'
import placeholder from '../public/static/images/placeholder.png'
import acscan from '../public/static/images/partners/acscan.png'
import arcadia from '../public/static/images/partners/arcadia.png'
//import aha from '../public/static/images/partners/aha.png'
import roslynmha from '../public/static/images/partners/roslynmha.png'

export const PartnerRow = () => {
  return (
    <div className="flex w-full flex-row items-center justify-around">
      <Link
        href="https://www.fightcancer.org/"
        className="h-min w-auto max-w-[15vw] lg:max-w-[8rem]"
      >
        <Image src={acscan} draggable="false" />
      </Link>
      <div className="flex h-min w-auto max-w-[15vw] flex-col items-center gap-1 lg:max-w-[8rem] lg:gap-0">
        <Image src={arcadia} draggable="false" />
      </div>
      <div className="flex h-min w-auto max-w-[15vw] flex-col items-center gap-1 lg:max-w-[8rem] lg:gap-0">
        <Image src={roslynmha} draggable="false" />
        <span className="select-none text-center text-xs font-semibold leading-3 text-black lg:whitespace-nowrap lg:text-base">
          Roslyn MHA Club
        </span>
      </div>
    </div>
  )
}
