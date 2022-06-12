import Image from 'next/image'
import jake from '../public/static/images/team/jake.png'
import stanley from '../public/static/images/team/stanley.png'
import amanda from '../public/static/images/team/amanda.png'
import maxx from '../public/static/images/team/maxx.png'
import kevin from '../public/static/images/team/kevin.png'
import wayne from '../public/static/images/team/wayne.png'

export default function Team() {
  return (
    <div className="my-6 flex h-auto flex-col gap-6">
      <div>
        <h1 className="mb-2 text-5xl font-extrabold">Our Team</h1>
        <h2>
          We're an organization comprised of high school students that aims to promote scientific
          and medical knowledge.
        </h2>
      </div>
      <ul className="grid h-auto grid-cols-1 gap-4">
        <li className="flex h-auto w-auto flex-row items-center gap-6 rounded-lg bg-gray-100 p-4 drop-shadow-lg dark:bg-[#2b2929]">
          <div className="relative z-0 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              placeholder="blur"
              src={jake}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Jake Konigsberg</h1>
            <div className="flex flex-row flex-wrap gap-1 whitespace-nowrap">
              <span className="w-min rounded-2xl bg-gradient-to-tl from-yellow-600 to-yellow-400 px-2 py-1 text-xs text-white">
                Founder
              </span>
              <span className="w-min rounded-2xl bg-gradient-to-tl  from-purple-800 to-purple-400 px-2 py-1 text-xs text-white">
                Content Writer
              </span>
              <span className="w-min rounded-2xl bg-gradient-to-tl from-blue-800 to-blue-400 px-2 py-1 text-xs text-white">
                Research Coordinator
              </span>
              <span className="w-min rounded-2xl bg-gradient-to-tl  from-red-800 to-red-400 px-2 py-1 text-xs text-white">
                Community Outreach
              </span>
            </div>
          </div>
        </li>
        <li className="flex h-auto w-auto flex-row items-center gap-6 rounded-lg bg-gray-100 p-4 drop-shadow-lg dark:bg-[#2b2929]">
          <div className="relative z-0 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              placeholder="blur"
              src={stanley}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Stanley Zhao</h1>
            <div className="flex flex-row gap-1 whitespace-nowrap">
              <span className="w-min rounded-2xl bg-gradient-to-tl from-[#0F3443] to-[#34E89E] px-2 py-1 text-xs text-white">
                Webmaster
              </span>
            </div>
            <div className="flex flex-row gap-3 whitespace-nowrap p-1 text-gray-800 dark:text-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-auto w-4"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-auto w-4"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-auto w-4"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
          </div>
        </li>
        <li className="flex h-auto w-auto flex-row items-center gap-6 rounded-lg bg-gray-100 p-4 drop-shadow-lg dark:bg-[#2b2929]">
          <div className="relative z-0 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              placeholder="blur"
              src={amanda}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Amanda Liswood</h1>
            <div className="flex flex-row gap-1 whitespace-nowrap">
              <span className="w-min rounded-2xl bg-gradient-to-tl from-blue-800 to-blue-400 px-2 py-1 text-xs text-white">
                Research Coordinator
              </span>
            </div>
          </div>
        </li>
        <li className="flex h-auto w-auto flex-row items-center gap-6 rounded-lg bg-gray-100 p-4 drop-shadow-lg dark:bg-[#2b2929]">
          <div className="relative z-0 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              placeholder="blur"
              src={maxx}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Maxx Yung</h1>
            <div className="flex flex-row gap-1 whitespace-nowrap">
              <span className="w-min rounded-2xl bg-gradient-to-tl  from-red-800 to-red-400 px-2 py-1 text-xs text-white">
                Community Outreach
              </span>
            </div>
          </div>
        </li>
        <li className="flex h-auto w-auto flex-row items-center gap-6 rounded-lg bg-gray-100 p-4 drop-shadow-lg dark:bg-[#2b2929]">
          <div className="relative z-0 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              placeholder="blur"
              src={kevin}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Kevin Zhang</h1>
            <div className="flex flex-row gap-1 whitespace-nowrap">
              <span className="w-min rounded-2xl bg-gradient-to-tl from-purple-800 to-purple-400 px-2 py-1 text-xs text-white">
                Content Writer
              </span>
            </div>
          </div>
        </li>
        <li className="flex h-auto w-auto flex-row items-center gap-6 rounded-lg bg-gray-100 p-4 drop-shadow-lg dark:bg-[#2b2929]">
          <div className="relative z-0 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full">
            <Image
              layout="fill"
              objectFit="cover"
              objectPosition="center center"
              placeholder="blur"
              src={wayne}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Wayne Shih</h1>
            <div className="flex flex-row gap-1 whitespace-nowrap">
              <span className="w-min rounded-2xl bg-gradient-to-tl from-purple-800 to-purple-400 px-2 py-1 text-xs text-white">
                Content Writer
              </span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

/*
Planning Sheet
https://docs.google.com/document/d/1f5_UN_0qomKFDdbwOgzNdJlGytLdybQUXaf2J1DnFP8/edit
*/
