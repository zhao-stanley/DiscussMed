import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from '../components/Link'
import SectionContainer from '../components/SectionContainer'
import upcomingTopics from '@/data/upcomingTopics'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import ThemeSwitch from '../components/ThemeSwitch'
import NLink from 'next/link'
import dayjs from 'dayjs'
import MissionItems from '@/components/MissionItems'
import Image from 'next/image'
import acscan from '../public/static/images/partners/acscan.png'
import aha from '../public/static/images/partners/aha.png'
import roslynmha from '../public/static/images/partners/roslynmha.png'
import Tag from '@/components/Tag'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import ScrollTop from '@/components/ScrollTop'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}
let customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const topics = []
upcomingTopics.sort((a, b) => dayjs(a.date, 'M/YY').valueOf() - dayjs(b.date, 'M/YY').valueOf())
upcomingTopics.forEach((e, key) => {
  if (dayjs().isBefore(dayjs(e.date, 'M/YY'))) {
    topics.push(
      <div
        className="h-auto w-64 whitespace-nowrap rounded-lg bg-gray-100 px-4 py-2 drop-shadow-md dark:bg-[#2b2929]"
        key={key}
      >
        <h1 className="text-xl font-semibold text-black dark:text-white">{e.name}</h1>
        <h1 className="text-gray-900 dark:text-gray-100">
          {dayjs(e.date, 'M/YY').format('MMMM YYYY')}
        </h1>
      </div>
    )
  }
})
const Home = ({ posts }) => {
  return (
    <>
      <ScrollTop />
      <SectionContainer cn={'h-screen'}>
        <div className="flex h-auto flex-col items-center">
          <header className="absolute z-10 flex w-full items-center justify-between py-6 px-4 sm:max-w-[720px] sm:px-0 xl:max-w-5xl">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Logo />
                  </div>
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="hidden h-6 text-2xl font-semibold sm:block">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="mt-[0.625rem] flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </header>
          <main className="relative z-0 mb-auto">
            <div className="flex h-screen flex-grow flex-col items-center justify-center gap-6">
              <div className="mx-5 mb-24 sm:flex sm:flex-col sm:items-center sm:text-center">
                <h1 className="bg-gradient-to-tl from-[#0F3443] to-[#34E89E] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl 2xl:text-8xl">
                  Medical Seeds
                </h1>
                <h2 className="text-md mt-2 mb-4 sm:text-lg lg:text-xl 2xl:mt-4 2xl:mb-8 2xl:text-2xl">
                  Making disease-related knowledge more accessible for everyone.
                </h2>
                <NLink href={'/blog'}>
                  <div className="w-min cursor-pointer whitespace-nowrap rounded-lg bg-gradient-to-tr from-[#0F3443] to-[#34E89E] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[3s] hover:opacity-75 sm:text-xl lg:text-2xl 2xl:text-3xl">
                    Start reading
                  </div>
                </NLink>
              </div>
            </div>
          </main>
        </div>
      </SectionContainer>
      <SectionContainer cn={'h-auto bg-slate-800 dark:bg-gray-100'}>
        <div className="flex w-full flex-col items-center">
          <div className="mx-5 my-24 flex max-w-full flex-col gap-2 text-white dark:text-black">
            <h1 className="text-4xl font-extrabold xl:text-5xl">Our Mission</h1>
            <p className="text-lg text-gray-300 dark:text-gray-900 xl:mt-2 xl:text-xl">
              We aim to{' '}
              <span className="bg-gradient-to-tl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                increase accessibility
              </span>{' '}
              of medical knowledge and to present it in an appealing and enjoyable way.
            </p>
            <MissionItems />
            <br />
            <br />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold xl:text-3xl">Upcoming Topics</h1>
              <p className="xl:text-lg">
                There is a dedicated disease every month with weekly blog posts about it. Here's
                what you can look forward to in the upcoming months:
              </p>
              <div className="grid h-auto grid-flow-col gap-2 overflow-x-scroll rounded-lg pb-2">
                {topics}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer cn={'h-auto bg-gray-100 dark:bg-gray-900'}>
        <div className="flex w-full flex-col items-center">
          <div className="mx-5 my-24 flex w-full flex-col gap-8 rounded-lg p-4 text-black dark:text-white">
            <div>
              <h1 className="mb-2 text-4xl font-extrabold xl:text-5xl">Join Our Mission</h1>
              <p className="text-lg text-gray-900 dark:text-gray-300 xl:text-xl">
                <span className="bg-gradient-to-tr from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                  Medical Seeds
                </span>{' '}
                is an organization led by high school students that aims to promote scientific and
                medical knowledge. Apply below to join{' '}
                <Link
                  className="bg-gradient-to-tr from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent"
                  href={'/team'}
                >
                  the team
                </Link>
                !
              </p>
            </div>
            <Link href={'https://forms.gle/QhEee9v2BiszeenM8'}>
              <div className="w-min whitespace-nowrap rounded-lg bg-gradient-to-tr from-[#0F3443] to-[#34E89E] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[3s] hover:opacity-75">
                Apply Now
              </div>
            </Link>
            <div>
              <h1 className="mb-2 text-4xl font-extrabold xl:text-5xl">Become a partner</h1>
              <p className="text-lg text-gray-900 dark:text-gray-300 xl:text-xl">
                We're always looking for ways to{' '}
                <span className="bg-gradient-to-bl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                  expand our outreach
                </span>{' '}
                and increase visibility. If you run a club or organization, feel free to apply
                below.{' '}
              </p>
            </div>
            <Link href={'https://forms.gle/oPic8fVadWLP6u9i6'}>
              <div className="w-min whitespace-nowrap rounded-lg bg-gradient-to-tr from-[#0F3443] to-[#34E89E] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[3s] hover:opacity-75">
                Apply Now
              </div>
            </Link>
            <div>
              <h1 className="mb-2 text-2xl font-extrabold xl:text-3xl">Proud partners</h1>
              <div className="flex flex-col items-center rounded-2xl bg-white px-4 py-2 drop-shadow-lg">
                <div className="flex w-full flex-row items-center justify-around">
                  <Link
                    href="https://www.fightcancer.org/"
                    className="h-min w-auto max-w-[25vw] lg:max-w-[10vw]"
                  >
                    <Image src={acscan}></Image>
                  </Link>
                  {/*<Link href="https://www.heart.org/" className="h-min w-auto max-w-[10vw]">
                    <Image src={aha}></Image>
                </Link>*/}
                  <div className="flex h-min w-auto max-w-[15vw] flex-col items-center gap-1 lg:max-w-[10vw]">
                    <Image src={roslynmha}></Image>
                    <span className="whitespace-nowrap text-xs font-semibold text-black lg:text-base">
                      Roslyn MHA Club
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer cn={'h-auto dark:bg-gray-100 bg-gray-900'}>
        <div className="mx-5 mt-24 divide-y divide-gray-700 dark:divide-gray-200">
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
          <div className="flex justify-end text-base font-medium leading-6 mx-5">
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
