import Image from 'next/image'
import teamData from '@/data/teamData'
import { getRoleColor } from '@/lib/utils/getRoleColor'
import { getTitle } from '@/lib/utils/getTitle'

const TeamMember = () => {
  return (
    <ul className="grid h-auto w-full grid-cols-1 gap-6 sm:w-auto sm:grid-cols-2 xl:grid-cols-3">
      {teamData.map((e, key) => (
        <li
          className="flex h-auto w-auto flex-row items-center gap-3 rounded-lg bg-[#2b2929] p-4 drop-shadow-lg dark:bg-gray-100"
          key={key}
        >
          <div className="relative z-0 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              placeholder="blur"
              draggable="false"
              alt={e.name}
              src={e.img}
            />
          </div>
          <div className="flex select-none flex-col gap-1">
            <h1 className="text-xl font-semibold tracking-tighter text-white dark:text-black">
              {e.name}
            </h1>
            <div className="flex flex-row gap-1 whitespace-nowrap">
              <span
                className={`w-min rounded-2xl bg-gradient-to-tl ${getRoleColor(
                  e.role
                )} px-2 py-1 text-xs font-medium tracking-tight text-white`}
              >
                {getTitle(e.role)}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TeamMember
