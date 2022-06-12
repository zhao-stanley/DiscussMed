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
let customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

const topics = []
upcomingTopics.forEach((e, key) => {
  if (dayjs().isBefore(dayjs(e.date, 'M/YY'))) {
    topics.push(
      <div
        className="h-auto w-64 whitespace-nowrap rounded-lg bg-gray-100 px-4 py-2 drop-shadow-md dark:bg-gray-800"
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

const Home = () => {
  return (
    <>
      <SectionContainer cn={'h-screen'}>
        <div className="flex h-auto flex-col items-center">
          <header className="absolute z-10 flex w-full items-center justify-between py-6 px-4 sm:px-6 lg:max-w-3xl xl:max-w-5xl xl:px-0">
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
            <div className="flex items-center text-base leading-5">
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
              <div className="mx-5 mb-24">
                <h1 className="bg-gradient-to-tl from-[#0F3443] to-[#34E89E] bg-clip-text text-5xl font-extrabold tracking-tight text-transparent">
                  Medical Seeds
                </h1>
                <h2 className="text-md mt-2 mb-4">
                  Making disease-related knowledge more accessible for everyone.
                </h2>
                <NLink href={'/blog'}>
                  <div className="w-min whitespace-nowrap rounded-lg bg-gradient-to-tr from-[#0F3443] to-[#34E89E] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[3s] hover:opacity-75">
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
            <h1 className="text-4xl font-extrabold">Our Mission</h1>
            <p className="text-lg text-gray-300 dark:text-gray-900">
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
              <h1 className="text-2xl font-bold">Upcoming Topics</h1>
              <p>What you can look forward to in the upcoming months:</p>
              <div className="grid h-auto grid-flow-col gap-2 overflow-x-scroll rounded-lg pb-2">
                {topics}
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer cn={'h-auto bg-gray-100 dark:bg-gray-900'}>
        <div className="flex w-full flex-col items-center">
          <div className="mx-5 my-12 flex w-full flex-col gap-8 rounded-lg p-4 text-black dark:text-white">
            <div>
              <h1 className="mb-2 text-4xl font-extrabold">Join Our Mission</h1>
              <p className="text-lg text-gray-900 dark:text-gray-300">
                <span className="bg-gradient-to-tr from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                  Medical Seeds
                </span>{' '}
                is a organization led by high school students that aims to promote scientific and
                medical knowledge. Apply below to join the team!
              </p>
            </div>
            <Link href={'https://forms.gle/QhEee9v2BiszeenM8'}>
              <div className="w-min whitespace-nowrap rounded-lg bg-gradient-to-tr from-[#0F3443] to-[#34E89E] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[3s] hover:opacity-75">
                Apply Now
              </div>
            </Link>
            <div>
              <h1 className="mb-2 text-4xl font-extrabold">Become a partner</h1>
              <p className="text-lg text-gray-900 dark:text-gray-300">
                We're always looking for ways to{' '}
                <span className="bg-gradient-to-bl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                  expand our outreach
                </span>
                . If you run a club/organization and are interested, feel free to apply below.{' '}
              </p>
            </div>
            <Link href={'https://forms.gle/QhEee9v2BiszeenM8'}>
              <div className="w-min whitespace-nowrap rounded-lg bg-gradient-to-tr from-[#0F3443] to-[#34E89E] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[3s] hover:opacity-75">
                Apply Now
              </div>
            </Link>
            <div>
              <h1 className="mb-2 text-2xl font-extrabold">Proud partners</h1>
            </div>
          </div>
          {/*<Footer />*/}
        </div>
      </SectionContainer>
    </>
  )
}

export default Home

/*We're an organization comprised of high school students who believe that science and
              medical knowledge are{' '}
              <span className="bg-gradient-to-tl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                essential to leading a healthy life
              </span>{' '}
              and understanding the world around you. <br />
              <br />*/
