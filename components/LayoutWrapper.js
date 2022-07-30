import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '../public/static/images/discussmed.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import ScrollTop from '@/components/ScrollTop'
import { PageSEO } from '@/components/SEO'
import NLink from 'next/link'

const LayoutWrapper = ({ children }) => {
  return children.props.isHome ? (
    <>
      <ScrollTop />
      <PageSEO title={`Home - ${siteMetadata.author}`} description={siteMetadata.description} />
      <SectionContainer cn={'h-screen'}>
        <div className="flex h-auto flex-col items-center">
          <header className="absolute z-10 flex w-full items-center justify-between py-6 px-4 sm:max-w-[720px] sm:px-0 xl:max-w-5xl">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Logo className="transition-[3s] ease-linear hover:-rotate-12 hover:scale-110 active:scale-90" />
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
                  discussmed
                </h1>
                <h2 className="text-md mt-2 mb-4 sm:text-lg lg:text-xl 2xl:mt-4 2xl:mb-8 2xl:text-2xl">
                  Bridging medical advocacy communities with future generations
                </h2>
                <NLink href={'/blog'} passHref={false}>
                  <div className="w-min cursor-pointer select-none whitespace-nowrap rounded-lg bg-gradient-to-tr from-[#0F3443] to-[#34E89E] px-6 py-3 text-lg font-semibold text-gray-50 shadow-md shadow-[#0F3443] transition-[5s] ease-linear hover:hue-rotate-15 active:scale-95 sm:text-xl lg:text-2xl 2xl:text-3xl">
                    Start reading
                  </div>
                </NLink>
              </div>
            </div>
          </main>
        </div>
      </SectionContainer>
      {children}
    </>
  ) : (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-6">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo className="transition-[3s] ease-linear hover:-rotate-12 hover:scale-110 active:scale-90" />
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
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
