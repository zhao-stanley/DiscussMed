import Image from 'next/image'
import teamMembers from '@/data/teamMembers'

const TeamMember = () => {
  teamMembers.map((e) => {
    <li className="flex h-auto w-auto flex-row items-center gap-3 rounded-lg bg-gray-100 p-4 drop-shadow-lg dark:bg-[#2b2929]">
      <div className="relative z-0 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          placeholder="blur"
          src={e.img}
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold">{e.name}</h1>
        <div className="flex flex-row gap-1 whitespace-nowrap">
          <span className="w-min rounded-2xl bg-gradient-to-tl from-blue-800 to-blue-400 px-2 py-1 text-xs text-white">
            Research Coordinator
          </span>
        </div>
      </div>
    </li>
  })
  return <></>
}

export default TeamMember
