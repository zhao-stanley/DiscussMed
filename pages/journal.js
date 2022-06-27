import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import publishedResearch from '@/data/publishedResearch'
import symposiumResearch from '@/data/symposiumResearch'
import { PageSEO } from '@/components/SEO'
import JournalCard from '@/components/JournalCard'
import romans from 'romans'

let sortedPR = publishedResearch.sort((a, b) => b.issue - a.issue)
let sortedSR = symposiumResearch.sort((a, b) => b.issue - a.issue)

export default function Journal() {
  return (
    <>
      <PageSEO title={`Research - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Journal
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            This is a high school led journal for high school students that have done research in
            biology or anything with biological applications. The goal of such a journal is to
            showcase and commend novel, innovative, and impressive research done at a high school
            level. This journal will be{' '}
            <span className="bg-gradient-to-bl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
              updated bi-yearly
            </span>{' '}
            but will accept submissions on a rolling basis.
            <br />
            <br />
            Accepted research will then be published. Research can be any synthesis, experiment, or
            modeling project-- there is no expected or required length. As it is understood that
            many high schoolers do not have write ups, presentations will also be accepted of which
            will be published in the{' '}
            <span className="bg-gradient-to-bl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
              High School Journal of Biological Sciences Symposium
            </span>
            . If you have any questions, feel free to{' '}
            <Link href="/#contact">
              <span className="cursor-pointer bg-gradient-to-bl from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                contact us
              </span>
            </Link>
            .
            <br />
            <br />
            Click{' '}
            <Link href="#sr">
              <span className="cursor-pointer bg-gradient-to-br from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                here
              </span>
            </Link>{' '}
            to scroll to the latest issue of the{' '}
            <Link href="#sr">
              <span className="cursor-pointer bg-gradient-to-tr from-[#1f6c8a] to-[#34E89E] bg-clip-text font-semibold text-transparent">
                High School Journal of Biological Sciences Symposium
              </span>
            </Link>
            .
          </p>
        </div>
        <div className="container py-12">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
            id="pr"
          >
            Published Research
          </h1>
          {sortedPR.map((d, k) => (
            <div className="py-6" key={k}>
              <h2 className="text-xl pb-2 font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
                High School Journal of Biological Sciences Issue {romans.romanize(d.issue)}
              </h2>
              <div className="-m-4 flex flex-wrap">
                {d.research.map((e, key) => (
                  <JournalCard
                    key={key}
                    text={'Download file'}
                    topic={`${e.topic}`}
                    href={e.href}
                    authors={e.authors}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="container py-12">
          <h1
            className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14"
            id="sr"
          >
            Symposium Research
          </h1>
          {sortedSR.map((d, k) => (
            <div className="py-6" key={k}>
              <h2 className="text-xl pb-2 font-semibold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-10 md:text-3xl md:leading-14">
                High School Journal of Biological Sciences Symposium Issue{' '}
                {romans.romanize(d.issue)}
              </h2>
              <div className="-m-4 flex flex-wrap">
                {d.research.map((e, key) => (
                  <JournalCard
                    key={key}
                    text={'Open research'}
                    topic={`${e.topic}`}
                    href={e.href}
                    authors={e.authors}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
