import Image from 'next/image'
import jake from '../public/static/images/team/jake.png'
import stanley from '../public/static/images/team/stanley.png'
import amanda from '../public/static/images/team/amanda.png'
import maxx from '../public/static/images/team/maxx.png'
import kevin from '../public/static/images/team/kevin.png'
import wayne from '../public/static/images/team/wayne.png'

const TeamMember = () => {
  return (
    <ul className="grid h-auto w-full grid-cols-1 gap-6 sm:w-auto sm:grid-cols-2 xl:grid-cols-3">
      {teamList.map((e, key) => (
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
              src={e.img}
            />
          </div>
          <div className="flex select-none flex-col gap-1">
            <h1 className="text-xl font-semibold text-white dark:text-black">{e.name}</h1>
            <div className="flex flex-row gap-1 whitespace-nowrap">
              <span
                className={`w-min rounded-2xl bg-gradient-to-tl ${e.tag} px-2 py-1 text-xs text-white`}
              >
                {e.title}
              </span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TeamMember

const roles = {
  founder: 'from-yellow-600 to-yellow-400',
  webmaster: 'from-[#0F3443] to-[#34E89E]',
  research: 'from-blue-800 to-blue-400',
  content: 'from-purple-800 to-purple-400',
}

const teamList = [
  {
    name: 'Jake Konigsberg',
    title: 'Founder',
    tag: roles.founder,
    img: jake,
  },
  {
    name: 'Stanley Zhao',
    title: 'Webmaster',
    tag: roles.webmaster,
    img: stanley,
  },
  {
    name: 'Amanda Liswood',
    title: 'Research Coordinator',
    tag: roles.research,
    img: amanda,
  },
  {
    name: 'Maxx Yung',
    title: 'Content Writer',
    tag: roles.content,
    img: maxx,
  },
  {
    name: 'Kevin Zhang',
    title: 'Content Writer',
    tag: roles.content,
    img: kevin,
  },
  {
    name: 'Wayne Shih',
    title: 'Content Writer',
    tag: roles.content,
    img: wayne,
  },
]
