import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from '../components/Link'
import SectionContainer from '../components/SectionContainer'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import ThemeSwitch from '../components/ThemeSwitch'
import NLink from 'next/link'

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
        <div className="flex h-auto w-full flex-col items-center">
          <div className="mx-5 my-24 flex flex-col gap-2 text-white dark:text-black">
            <h1 className="text-3xl font-extrabold">Our Mission</h1>
            <p className="text-lg text-gray-300 dark:text-gray-900">
              We aim to{' '}
              <span className="bg-gradient-to-tl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                increase accessibility
              </span>{' '}
              of medical knowledge and to present it in an appealing and enjoyable way.
            </p>
            <div className="mt-8 flex flex-col justify-between gap-6">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto w-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 p-[0.625rem] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                  <h1 className="text-xl font-bold">Topic Driven Blogs</h1>
                </div>
                <p className="text-gray-300 dark:text-gray-900">
                  Read our blog posts on different diseases every week.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto w-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-800 p-[0.625rem] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    />
                  </svg>
                  <h1 className="text-xl font-bold">Expert podcasts</h1>
                </div>
                <p className="text-gray-300 dark:text-gray-900">
                  Listen to podcasts by medical professionals about different diseases.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto w-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-800 p-[0.625rem] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                    />
                  </svg>
                  <h1 className="text-xl font-bold">Numerous resources</h1>
                </div>
                <p className="text-gray-300 dark:text-gray-900">
                  Novel research summaries to Facebook groups, all in one place.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-auto w-12 rounded-xl bg-gradient-to-tl from-[#1f6c8a] to-[#34E89E] p-[0.625rem] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <h1 className="text-xl font-bold">Research journal</h1>
                </div>
                <p className="text-gray-300 dark:text-gray-900">
                  A journal showcasing and commending student research with biological applications.
                </p>
              </div>
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
