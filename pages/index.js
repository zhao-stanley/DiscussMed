import Link from '../components/Link'
import SectionContainer from '../components/SectionContainer'
import upcomingTopics from '@/data/upcomingTopics'
import Footer from '../components/Footer'
import dayjs from 'dayjs'
import MissionItems from '@/components/MissionItems'
import Tag from '@/components/Tag'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { ContactForm } from '@/components/ContactForm'
import TeamMembers from '@/components/TeamMembers'
import { PartnerRow } from '@/components/PartnerRow'
import { useState, useEffect } from 'react'
import PWA from '@/components/PWA'

const MAX_DISPLAY = 10

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')
  const isHome = true

  return { props: { isHome, posts } }
}
let customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const topics = []
upcomingTopics.sort((a, b) => dayjs(a.date, 'M/YY').valueOf() - dayjs(b.date, 'M/YY').valueOf())
upcomingTopics.forEach((e, key) => {
  if (dayjs().isSame(dayjs(e.date, 'M/YY'), 'month')) {
    topics.push(
      <div
        className="h-auto w-64 whitespace-nowrap rounded-lg bg-[#2b2929] px-4 py-2 drop-shadow-md dark:bg-gray-50"
        key={key}
      >
        <h1 className="text-xl font-semibold text-white dark:text-black">{e.name}</h1>
        <h1 className="w-min rounded-md bg-yellow-500 bg-opacity-80 px-1 font-semibold text-gray-100 dark:bg-yellow-300 dark:text-gray-900">
          Current topic!
        </h1>
      </div>
    )
  }
  if (dayjs().isBefore(dayjs(e.date, 'M/YY'))) {
    topics.push(
      <div
        className="h-auto w-64 whitespace-nowrap rounded-lg bg-[#2b2929] px-4 py-2 drop-shadow-md dark:bg-gray-50"
        key={key}
      >
        <h1 className="text-xl font-semibold text-white dark:text-black">{e.name}</h1>
        <h1 className="text-gray-100 dark:text-gray-900">
          {dayjs(e.date, 'M/YY').format('MMMM YYYY')}
        </h1>
      </div>
    )
  }
})

const Home = ({ posts }) => {
  const [isPWA, setIsPWA] = useState(true)
  useEffect(() => {
    setIsPWA(window.matchMedia('(display-mode: standalone)').matches)
  }, [])

  return (
    <>
      {isPWA ? null : <PWA />}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full bg-gradient-to-t from-gray-900 to-gray-100 dark:from-gray-100 dark:to-gray-900"
        version="1.1"
        viewBox="0 0 2560 400"
      >
        <path
          fill="#171717"
          className="fill-gray-50 dark:fill-gray-900"
          d="M0 53l32.8 17.3c32.9 17.4 98.5 52 164.2 65.4 65.7 13.3 131.3 5.3 197-4 65.7-9.4 131.3-20 197-34.7 65.7-14.7 131.3-33.3 197-26 65.7 7.3 131.3 40.7 197 48.7 65.7 8 131.3-9.4 196.8-26.7 65.5-17.3 130.9-34.7 196.4-22 65.5 12.7 131.1 55.3 196.8 62.7 65.7 7.3 131.3-20.7 197-21.4 65.7-.6 131.3 26 197 18 65.7-8 131.3-50.6 197-68.6 65.7-18 131.3-11.4 197-9.4 65.7 2 131.3-.6 164.2-2L2560 49V0H0z"
        ></path>
        <path
          fill="#363636"
          className="fill-[#cbcbcb] dark:fill-[#363636]"
          d="M0 133l32.8 12.7c32.9 12.6 98.5 38 164.2 42 65.7 4 131.3-13.4 197-23.4 65.7-10 131.3-12.6 197-19.3 65.7-6.7 131.3-17.3 197-9.3 65.7 8 131.3 34.6 197 44 65.7 9.3 131.3 1.3 196.8-18.7s130.9-52 196.4-49.3c65.5 2.6 131.1 40 196.8 54 65.7 14 131.3 4.6 197 9.3 65.7 4.7 131.3 23.3 197 14 65.7-9.3 131.3-46.7 197-63.3 65.7-16.7 131.3-12.7 197-12.7 65.7 0 131.3-4 164.2-6l32.8-2V47l-32.8 1.3c-32.9 1.4-98.5 4-164.2 2-65.7-2-131.3-8.6-197 9.4-65.7 18-131.3 60.6-197 68.6-65.7 8-131.3-18.6-197-18-65.7.7-131.3 28.7-197 21.4-65.7-7.4-131.3-50-196.8-62.7-65.5-12.7-130.9 4.7-196.4 22s-131.1 34.7-196.8 26.7c-65.7-8-131.3-41.4-197-48.7-65.7-7.3-131.3 11.3-197 26-65.7 14.7-131.3 25.3-197 34.7-65.7 9.3-131.3 17.3-197 4-65.7-13.4-131.3-48-164.2-65.4L0 51z"
        ></path>
        <path
          fill="#585858"
          className="fill-[#a3a3a3] dark:fill-[#585858]"
          d="M0 157l32.8 19.3c32.9 19.4 98.5 58 164.2 68.7 65.7 10.7 131.3-6.7 197-26 65.7-19.3 131.3-40.7 197-52 65.7-11.3 131.3-12.7 197-2.7 65.7 10 131.3 31.4 197 40.7 65.7 9.3 131.3 6.7 196.8-13.3s130.9-57.4 196.4-53.4 131.1 49.4 196.8 62c65.7 12.7 131.3-7.3 197-6 65.7 1.4 131.3 24 197 22 65.7-2 131.3-28.6 197-42 65.7-13.3 131.3-13.3 197-13.3h197v-58l-32.8 2c-32.9 2-98.5 6-164.2 6-65.7 0-131.3-4-197 12.7-65.7 16.6-131.3 54-197 63.3-65.7 9.3-131.3-9.3-197-14-65.7-4.7-131.3 4.7-197-9.3-65.7-14-131.3-51.4-196.8-54-65.5-2.7-130.9 29.3-196.4 49.3-65.5 20-131.1 28-196.8 18.7-65.7-9.4-131.3-36-197-44-65.7-8-131.3 2.6-197 9.3-65.7 6.7-131.3 9.3-197 19.3-65.7 10-131.3 27.4-197 23.4-65.7-4-131.3-29.4-164.2-42L0 131z"
        ></path>
        <path
          fill="#7c7c7c"
          className="fill-[#7c7c7c] dark:fill-[#7c7c7c]"
          d="M0 189l32.8 23.3c32.9 23.4 98.5 70 164.2 78 65.7 8 131.3-22.6 197-42.6 65.7-20 131.3-29.4 197-36.7 65.7-7.3 131.3-12.7 197-7.3 65.7 5.3 131.3 21.3 197 28.6 65.7 7.4 131.3 6 196.8-8s130.9-40.6 196.4-37.3c65.5 3.3 131.1 36.7 196.8 44.7 65.7 8 131.3-9.4 197-10 65.7-.7 131.3 15.3 197 18.6 65.7 3.4 131.3-6 197-15.3 65.7-9.3 131.3-18.7 197-22.7 65.7-4 131.3-2.6 164.2-2l32.8.7v-42h-197c-65.7 0-131.3 0-197 13.3-65.7 13.4-131.3 40-197 42-65.7 2-131.3-20.6-197-22-65.7-1.3-131.3 18.7-197 6-65.7-12.6-131.3-58-196.8-62s-130.9 33.4-196.4 53.4S1050.7 212.3 985 203c-65.7-9.3-131.3-30.7-197-40.7-65.7-10-131.3-8.6-197 2.7-65.7 11.3-131.3 32.7-197 52-65.7 19.3-131.3 36.7-197 26-65.7-10.7-131.3-49.3-164.2-68.7L0 155z"
        ></path>
        <path
          fill="#a3a3a3"
          className="fill-[#585858] dark:fill-[#a3a3a3]"
          d="M0 285l32.8 9.3c32.9 9.4 98.5 28 164.2 31.4 65.7 3.3 131.3-8.7 197-13.4 65.7-4.6 131.3-2 197-17.3 65.7-15.3 131.3-48.7 197-50.7 65.7-2 131.3 27.4 197 33.4 65.7 6 131.3-11.4 196.8-32 65.5-20.7 130.9-44.7 196.4-37.4 65.5 7.4 131.1 46 196.8 60 65.7 14 131.3 3.4 197 1.4 65.7-2 131.3 4.6 197 10 65.7 5.3 131.3 9.3 197-.7 65.7-10 131.3-34 197-36.7 65.7-2.6 131.3 16 164.2 25.4l32.8 9.3v-78l-32.8-.7c-32.9-.6-98.5-2-164.2 2-65.7 4-131.3 13.4-197 22.7-65.7 9.3-131.3 18.7-197 15.3-65.7-3.3-131.3-19.3-197-18.6-65.7.6-131.3 18-197 10-65.7-8-131.3-41.4-196.8-44.7-65.5-3.3-130.9 23.3-196.4 37.3-65.5 14-131.1 15.4-196.8 8-65.7-7.3-131.3-23.3-197-28.6-65.7-5.4-131.3 0-197 7.3-65.7 7.3-131.3 16.7-197 36.7-65.7 20-131.3 50.6-197 42.6-65.7-8-131.3-54.6-164.2-78L0 187z"
        ></path>
        <path
          fill="#cbcbcb"
          className="fill-[#363636] dark:fill-[#cbcbcb]"
          d="M0 301l32.8 8c32.9 8 98.5 24 164.2 30 65.7 6 131.3 2 197 0 65.7-2 131.3-2 197-21.3 65.7-19.4 131.3-58 197-56 65.7 2 131.3 44.6 197 54.6 65.7 10 131.3-12.6 196.8-36 65.5-23.3 130.9-47.3 196.4-40.6 65.5 6.6 131.1 44 196.8 54 65.7 10 131.3-7.4 197-7.4 65.7 0 131.3 17.4 197 24.7 65.7 7.3 131.3 4.7 197-8 65.7-12.7 131.3-35.3 197-40 65.7-4.7 131.3 8.7 164.2 15.3l32.8 6.7v-10l-32.8-9.3c-32.9-9.4-98.5-28-164.2-25.4-65.7 2.7-131.3 26.7-197 36.7-65.7 10-131.3 6-197 .7-65.7-5.4-131.3-12-197-10-65.7 2-131.3 12.6-197-1.4-65.7-14-131.3-52.6-196.8-60-65.5-7.3-130.9 16.7-196.4 37.4-65.5 20.6-131.1 38-196.8 32-65.7-6-131.3-35.4-197-33.4-65.7 2-131.3 35.4-197 50.7-65.7 15.3-131.3 12.7-197 17.3-65.7 4.7-131.3 16.7-197 13.4-65.7-3.4-131.3-22-164.2-31.4L0 283z"
        ></path>
        <path
          fill="#f5f5f5"
          className="fill-gray-900 dark:fill-gray-100"
          d="M0 401h2560V283l-32.8-6.7c-32.9-6.6-98.5-20-164.2-15.3-65.7 4.7-131.3 27.3-197 40-65.7 12.7-131.3 15.3-197 8-65.7-7.3-131.3-24.7-197-24.7-65.7 0-131.3 17.4-197 7.4-65.7-10-131.3-47.4-196.8-54-65.5-6.7-130.9 17.3-196.4 40.6-65.5 23.4-131.1 46-196.8 36-65.7-10-131.3-52.6-197-54.6-65.7-2-131.3 36.6-197 56C525.3 335 459.7 335 394 337c-65.7 2-131.3 6-197 0-65.7-6-131.3-22-164.2-30L0 299z"
        ></path>
      </svg>
      <SectionContainer cn={'h-auto bg-gray-900 dark:bg-gray-100'}>
        <div className="flex w-full flex-col items-center">
          <div className="mx-5 my-24 flex max-w-full flex-col gap-2 text-white dark:text-black">
            <h1 className="text-4xl font-extrabold leading-9 tracking-tight xl:text-6xl">
              Our Mission
            </h1>
            <p className="text-lg text-gray-300 dark:text-gray-900 xl:mt-2 xl:text-xl">
              We aim to
              <span className="bg-gradient-to-tl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                {' '}
                encourage youth engagement
              </span>{' '}
              and interest in medical knowledge in order to promote youth based medical-related
              advocacy through an array of different mediums:
            </p>
            <MissionItems />
            <br />
            <br />
            <div className="flex flex-col gap-2" id="topics">
              <h1 className="text-3xl font-bold leading-9 tracking-tight xl:text-4xl">
                Upcoming Topics
              </h1>
              <p className="xl:text-lg">
                Every month has a dedicated disease/disorder that our blog will be focusing on, with
                new blog posts coming out every week. Here's what you can look forward to in the
                upcoming months:
              </p>
              <div className="grid h-auto grid-flow-col gap-2 overflow-x-scroll rounded-lg pb-2">
                {topics}
              </div>
            </div>
            <div className="my-24 flex h-auto flex-col gap-6">
              <div>
                <h1 className="mb-2 text-4xl font-extrabold leading-9 tracking-tight text-white dark:text-black xl:text-6xl">
                  Our Team
                </h1>
                <h2 className="text-md text-gray-100 dark:text-gray-800 xl:text-lg">
                  Meet the wonderful team behind the mission!
                </h2>
              </div>
              <div className="flex flex-col items-center">
                <TeamMembers />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full bg-gradient-to-t from-gray-100 to-gray-900 dark:from-gray-900 dark:to-gray-100"
        version="1.1"
        viewBox="0 0 2560 400"
      >
        <path
          fill="#f5f5f5"
          className="fill-gray-900 dark:fill-gray-100"
          d="M0 41l32.8 16c32.9 16 98.5 48 164.2 60 65.7 12 131.3 4 197-6 65.7-10 131.3-22 197-31.3 65.7-9.4 131.3-16 197-12 65.7 4 131.3 18.6 197 34 65.7 15.3 131.3 31.3 196.8 33.3 65.5 2 130.9-10 196.4-24s131.1-30 196.8-39.3c65.7-9.4 131.3-12 197 4 65.7 16 131.3 50.6 197 50.6 65.7 0 131.3-34.6 197-52.6 65.7-18 131.3-19.4 197-.7 65.7 18.7 131.3 57.3 164.2 76.7L2560 169V0H0z"
        ></path>
        <path
          fill="#cbcbcb"
          className="fill-[#363636] dark:fill-[#cbcbcb]"
          d="M0 93l32.8 16c32.9 16 98.5 48 164.2 53.3 65.7 5.4 131.3-16 197-25.3 65.7-9.3 131.3-6.7 197-12.7 65.7-6 131.3-20.6 197-22 65.7-1.3 131.3 10.7 197 26 65.7 15.4 131.3 34 196.8 34.7 65.5.7 130.9-16.7 196.4-28.7s131.1-18.6 196.8-22c65.7-3.3 131.3-3.3 197 11.4 65.7 14.6 131.3 44 197 36.6 65.7-7.3 131.3-51.3 197-72.6 65.7-21.4 131.3-20 197-2 65.7 18 131.3 52.6 164.2 70L2560 173v-6l-32.8-19.3c-32.9-19.4-98.5-58-164.2-76.7-65.7-18.7-131.3-17.3-197 .7-65.7 18-131.3 52.6-197 52.6-65.7 0-131.3-34.6-197-50.6-65.7-16-131.3-13.4-197-4-65.7 9.3-131.3 25.3-196.8 39.3-65.5 14-130.9 26-196.4 24S1050.7 115 985 99.7c-65.7-15.4-131.3-30-197-34-65.7-4-131.3 2.6-197 12C525.3 87 459.7 99 394 109c-65.7 10-131.3 18-197 6-65.7-12-131.3-44-164.2-60L0 39z"
        ></path>
        <path
          fill="#a3a3a3"
          className="fill-[#585858] dark:fill-[#a3a3a3]"
          d="M0 129l32.8 12c32.9 12 98.5 36 164.2 44.7 65.7 8.6 131.3 2 197-5.4 65.7-7.3 131.3-15.3 197-20.6 65.7-5.4 131.3-8 197-8 65.7 0 131.3 2.6 197 10.6 65.7 8 131.3 21.4 196.8 21.4s130.9-13.4 196.4-26c65.5-12.7 131.1-24.7 196.8-21.4 65.7 3.4 131.3 22 197 38.7 65.7 16.7 131.3 31.3 197 17.3 65.7-14 131.3-56.6 197-64.6 65.7-8 131.3 18.6 197 46.6 65.7 28 131.3 57.4 164.2 72L2560 261v-90l-32.8-17.3c-32.9-17.4-98.5-52-164.2-70-65.7-18-131.3-19.4-197 2-65.7 21.3-131.3 65.3-197 72.6-65.7 7.4-131.3-22-197-36.6-65.7-14.7-131.3-14.7-197-11.4-65.7 3.4-131.3 10-196.8 22s-130.9 29.4-196.4 28.7c-65.5-.7-131.1-19.3-196.8-34.7-65.7-15.3-131.3-27.3-197-26-65.7 1.4-131.3 16-197 22-65.7 6-131.3 3.4-197 12.7-65.7 9.3-131.3 30.7-197 25.3C131.3 155 65.7 123 32.8 107L0 91z"
        ></path>
        <path
          fill="#7c7c7c"
          className="fill-[#7c7c7c] dark:fill-[#7c7c7c]"
          d="M0 177l32.8 10c32.9 10 98.5 30 164.2 42 65.7 12 131.3 16 197 5.3 65.7-10.6 131.3-36 197-49.3 65.7-13.3 131.3-14.7 197-8.7 65.7 6 131.3 19.4 197 33.4 65.7 14 131.3 28.6 196.8 29.3 65.5.7 130.9-12.7 196.4-32s131.1-44.7 196.8-46.7c65.7-2 131.3 19.4 197 41.4 65.7 22 131.3 44.6 197 39.3 65.7-5.3 131.3-38.7 197-51.3 65.7-12.7 131.3-4.7 197 12 65.7 16.6 131.3 42 164.2 54.6L2560 269v-10l-32.8-14.7c-32.9-14.6-98.5-44-164.2-72-65.7-28-131.3-54.6-197-46.6-65.7 8-131.3 50.6-197 64.6-65.7 14-131.3-.6-197-17.3-65.7-16.7-131.3-35.3-197-38.7-65.7-3.3-131.3 8.7-196.8 21.4-65.5 12.6-130.9 26-196.4 26s-131.1-13.4-196.8-21.4c-65.7-8-131.3-10.6-197-10.6-65.7 0-131.3 2.6-197 8-65.7 5.3-131.3 13.3-197 20.6-65.7 7.4-131.3 14-197 5.4C131.3 175 65.7 151 32.8 139L0 127z"
        ></path>
        <path
          fill="#585858"
          className="fill-[#a3a3a3] dark:fill-[#585858]"
          d="M0 185l32.8 12c32.9 12 98.5 36 164.2 52 65.7 16 131.3 24 197 17.3 65.7-6.6 131.3-28 197-38.6C656.7 217 722.3 217 788 217c65.7 0 131.3 0 197 7.3 65.7 7.4 131.3 22 196.8 26.7 65.5 4.7 130.9-.7 196.4-20s131.1-52.7 196.8-53.3c65.7-.7 131.3 31.3 197 60 65.7 28.6 131.3 54 197 44 65.7-10 131.3-55.4 197-75.4 65.7-20 131.3-14.6 197 7.4 65.7 22 131.3 60.6 164.2 80L2560 313v-46l-32.8-12.7c-32.9-12.6-98.5-38-164.2-54.6-65.7-16.7-131.3-24.7-197-12-65.7 12.6-131.3 46-197 51.3-65.7 5.3-131.3-17.3-197-39.3-65.7-22-131.3-43.4-197-41.4-65.7 2-131.3 27.4-196.8 46.7-65.5 19.3-130.9 32.7-196.4 32-65.5-.7-131.1-15.3-196.8-29.3-65.7-14-131.3-27.4-197-33.4-65.7-6-131.3-4.6-197 8.7-65.7 13.3-131.3 38.7-197 49.3-65.7 10.7-131.3 6.7-197-5.3-65.7-12-131.3-32-164.2-42L0 175z"
        ></path>
        <path
          fill="#363636"
          className="fill-[#cbcbcb] dark:fill-[#363636]"
          d="M0 265l32.8 12c32.9 12 98.5 36 164.2 55.3 65.7 19.4 131.3 34 197 28 65.7-6 131.3-32.6 197-46.6 65.7-14 131.3-15.4 197-14.7 65.7.7 131.3 3.3 197 1.3 65.7-2 131.3-8.6 196.8-4.6s130.9 18.6 196.4 1.3 131.1-66.7 196.8-75.3c65.7-8.7 131.3 23.3 197 49.3 65.7 26 131.3 46 197 45.3 65.7-.6 131.3-22 197-42 65.7-20 131.3-38.6 197-23.3 65.7 15.3 131.3 64.7 164.2 89.3L2560 365v-54l-32.8-19.3c-32.9-19.4-98.5-58-164.2-80-65.7-22-131.3-27.4-197-7.4-65.7 20-131.3 65.4-197 75.4-65.7 10-131.3-15.4-197-44-65.7-28.7-131.3-60.7-197-60-65.7.6-131.3 34-196.8 53.3-65.5 19.3-130.9 24.7-196.4 20-65.5-4.7-131.1-19.3-196.8-26.7-65.7-7.3-131.3-7.3-197-7.3-65.7 0-131.3 0-197 10.7-65.7 10.6-131.3 32-197 38.6-65.7 6.7-131.3-1.3-197-17.3-65.7-16-131.3-40-164.2-52L0 183z"
        ></path>
        <path
          fill="#171717"
          className="fill-gray-100 dark:fill-gray-900"
          d="M0 401h2560v-38l-32.8-24.7c-32.9-24.6-98.5-74-164.2-89.3-65.7-15.3-131.3 3.3-197 23.3-65.7 20-131.3 41.4-197 42-65.7.7-131.3-19.3-197-45.3-65.7-26-131.3-58-197-49.3-65.7 8.6-131.3 58-196.8 75.3-65.5 17.3-130.9 2.7-196.4-1.3s-131.1 2.6-196.8 4.6c-65.7 2-131.3-.6-197-1.3-65.7-.7-131.3.7-197 14.7-65.7 14-131.3 40.6-197 46.6-65.7 6-131.3-8.6-197-28C131.3 311 65.7 287 32.8 275L0 263z"
        ></path>
      </svg>
      <SectionContainer cn={'h-auto bg-gray-100 dark:bg-gray-900'}>
        <div className="flex w-full flex-col items-center">
          <div className="mx-5 my-24 flex w-full flex-col gap-8 rounded-lg p-4 text-black dark:text-white">
            <div>
              <h1 className="mb-2 text-4xl font-extrabold tracking-tight xl:text-5xl">
                Join Our Mission
              </h1>
              <p className="text-lg text-gray-900 dark:text-gray-300 xl:text-xl">
                <span className="bg-gradient-to-tr from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                  DiscussMed
                </span>{' '}
                aims to bridge medical advocacy communities with future generations. Apply below to
                join{' '}
                <span className="bg-gradient-to-tr from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                  the team
                </span>
                !
              </p>
            </div>
            <Link className="w-min" href={'https://forms.gle/QhEee9v2BiszeenM8'}>
              <div className="w-min select-none whitespace-nowrap rounded-lg bg-gradient-to-tr from-[#1e7a9f] to-[#26c784] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[5s] ease-linear hover:hue-rotate-15 active:scale-95">
                Apply Now
              </div>
            </Link>
            <div>
              <h1 className="mb-2 text-4xl font-extrabold tracking-tight xl:text-5xl">
                Become a partner
              </h1>
              <p className="text-lg text-gray-900 dark:text-gray-300 xl:text-xl">
                We're always looking for ways to{' '}
                <span className="bg-gradient-to-bl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                  expand our outreach
                </span>{' '}
                and increase visibility. If you run a club or organization, feel free to apply
                below.{' '}
              </p>
            </div>
            <Link className="w-min" href={'https://forms.gle/oPic8fVadWLP6u9i6'}>
              <div className="select-none whitespace-nowrap rounded-lg bg-gradient-to-tr from-[#1e7a9f] to-[#26c784] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[5s] ease-linear hover:hue-rotate-15 active:scale-95">
                Apply Now
              </div>
            </Link>
            <div>
              <h1 className="mb-2 text-3xl font-extrabold leading-9 tracking-tight xl:text-4xl">
                Proud partners
              </h1>
              <div className="flex flex-col items-center rounded-2xl bg-white px-4 py-2 drop-shadow-lg">
                <PartnerRow />
              </div>
            </div>
            <div
              className="rounded-3xl bg-gradient-to-tl from-gray-50 to-white p-6 shadow-md dark:from-[#212121] dark:to-[#0f0f0f] 2xl:p-12"
              id="contact"
            >
              <h1 className="mb-2 text-3xl font-extrabold leading-9 tracking-tight md:text-4xl xl:text-5xl">
                Contact Us
              </h1>
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-full bg-gradient-to-t from-gray-900 to-gray-100 dark:from-gray-100 dark:to-gray-900"
        version="1.1"
        viewBox="0 0 2560 450"
      >
        <path
          fill="#171717"
          className="fill-gray-100 dark:fill-gray-900"
          d="M0 109l38.8-4.5c38.9-4.5 116.5-13.5 194-3S387.7 142 465.2 145s155.1-21 232.8-20.2c77.7.9 155.3 26.5 233 31.9 77.7 5.3 155.3-9.7 232.8-24.7s154.9-30 232.4-37.5 155.1-7.5 232.8 9c77.7 16.5 155.3 49.5 233 64.5 77.7 15 155.3 12 232.8 2.2 77.5-9.9 154.9-26.5 232.4-38.5s155.1-19.4 194-23l38.8-3.7V0H0z"
        ></path>
        <path
          fill="#464646"
          className="fill-[#b7b7b7] dark:fill-[#464646]"
          d="M0 208l38.8-11.2c38.9-11.1 116.5-33.5 194-32.6 77.5.8 154.9 24.8 232.4 33.8 77.5 9 155.1 3 232.8 15.7 77.7 12.6 155.3 44 233 44.6 77.7.7 155.3-29.3 232.8-51.8 77.5-22.5 154.9-37.5 232.4-48.7 77.5-11.1 155.1-18.5 232.8 4 77.7 22.5 155.3 74.9 233 89 77.7 14.2 155.3-9.8 232.8-27.8s154.9-30 232.4-41.2c77.5-11.1 155.1-21.5 194-26.6l38.8-5.2v-47l-38.8 3.7c-38.9 3.6-116.5 11-194 23s-154.9 28.6-232.4 38.5c-77.5 9.8-155.1 12.8-232.8-2.2-77.7-15-155.3-48-233-64.5-77.7-16.5-155.3-16.5-232.8-9S1241.3 115 1163.8 130s-155.1 30-232.8 24.7c-77.7-5.4-155.3-31-233-31.9-77.7-.8-155.3 23.2-232.8 20.2s-154.9-33-232.4-43.5-155.1-1.5-194 3L0 107z"
        ></path>
        <path
          fill="#7c7c7c"
          className="fill-[#7c7c7c] dark:fill-[#7c7c7c]"
          d="M0 262l38.8-12c38.9-12 116.5-36 194-39.7 77.5-3.6 154.9 13 232.4 20.5s155.1 5.9 232.8 20.9c77.7 15 155.3 46.6 233 48.1 77.7 1.5 155.3-27.1 232.8-51.1s154.9-43.4 232.4-50.9 155.1-3.1 232.8 19.4c77.7 22.5 155.3 63.1 233 78.1 77.7 15 155.3 4.4 232.8-6.1s154.9-20.9 232.4-35.9 155.1-34.6 194-44.5l38.8-9.8v-51l-38.8 5.2c-38.9 5.1-116.5 15.5-194 26.6-77.5 11.2-154.9 23.2-232.4 41.2-77.5 18-155.1 42-232.8 27.8-77.7-14.1-155.3-66.5-233-89-77.7-22.5-155.3-15.1-232.8-4-77.5 11.2-154.9 26.2-232.4 48.7-77.5 22.5-155.1 52.5-232.8 51.8-77.7-.6-155.3-32-233-44.6C620.3 199 542.7 205 465.2 196s-154.9-33-232.4-33.8c-77.5-.9-155.1 21.5-194 32.6L0 206z"
        ></path>
        <path
          fill="#b7b7b7"
          className="fill-[#464646] dark:fill-[#b7b7b7]"
          d="M0 357l38.8-16.5c38.9-16.5 116.5-49.5 194-54.8 77.5-5.4 154.9 17 232.4 20s155.1-13.4 232.8-2c77.7 11.3 155.3 50.3 233 60 77.7 9.6 155.3-10 232.8-38.5s154.9-65.9 232.4-77c77.5-11.2 155.1 3.8 232.8 25.5 77.7 21.6 155.3 50 233 68.6 77.7 18.7 155.3 27.7 232.8 18.7s154.9-36 232.4-57.7c77.5-21.6 155.1-38 194-46.1l38.8-8.2v-52l-38.8 9.8c-38.9 9.9-116.5 29.5-194 44.5s-154.9 25.4-232.4 35.9-155.1 21.1-232.8 6.1c-77.7-15-155.3-55.6-233-78.1-77.7-22.5-155.3-26.9-232.8-19.4s-154.9 26.9-232.4 50.9-155.1 52.6-232.8 51.1c-77.7-1.5-155.3-33.1-233-48.1-77.7-15-155.3-13.4-232.8-20.9-77.5-7.5-154.9-24.1-232.4-20.5C155.3 212 77.7 236 38.8 248L0 260z"
        ></path>
        <path
          fill="#f5f5f5"
          className="fill-gray-900 dark:fill-gray-100"
          d="M0 451H2560V247l-38.8 8.2c-38.9 8.1-116.5 24.5-194 46.1-77.5 21.7-154.9 48.7-232.4 57.7s-155.1 0-232.8-18.7c-77.7-18.6-155.3-47-233-68.6-77.7-21.7-155.3-36.7-232.8-25.5-77.5 11.1-154.9 48.5-232.4 77s-155.1 48.1-232.8 38.5c-77.7-9.7-155.3-48.7-233-60-77.7-11.4-155.3 5-232.8 2s-154.9-25.4-232.4-20c-77.5 5.3-155.1 38.3-194 54.8L0 355z"
        ></path>
      </svg>
      <SectionContainer cn={'h-auto dark:bg-gray-100 bg-gray-900'}>
        <div className="mx-5 my-24 divide-y divide-gray-700 dark:divide-gray-200">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <h1 className="text-5xl font-extrabold leading-9 tracking-tight text-gray-100 dark:text-gray-900 sm:leading-10 xl:text-6xl xl:leading-14">
              Latest Reads
            </h1>
            <p className="text-lg leading-7 text-gray-400 dark:text-gray-500">
              Catch up on the latest blog posts! Every month the topic of our blog posts focus on a
              different disease. New blog posts every week, don't miss out!
            </p>
          </div>
          <ul className="divide-y divide-gray-700 dark:divide-gray-200">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-400 dark:text-gray-500">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-100 dark:text-gray-900"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-400 dark:text-gray-500">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="bg-gradient-to-tr from-[#1f6c8a] to-[#34E89E] bg-clip-text text-transparent transition-[3s] hover:hue-rotate-30"
                            aria-label={`Read "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
        {posts.length > MAX_DISPLAY && (
          <div className="mx-5 flex justify-end text-base font-medium leading-6">
            <Link
              href="/blog"
              className="bg-gradient-to-tr from-[#1f6c8a] to-[#34E89E] bg-clip-text text-transparent transition-[3s] hover:hue-rotate-30"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
        <Footer />
      </SectionContainer>
    </>
  )
}

export default Home
