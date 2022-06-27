import siteMetadata from '@/data/siteMetadata'
import researchData from '@/data/researchData'
import { PageSEO } from '@/components/SEO'
import ResearchCard from '@/components/ResearchCard'

export default function Research() {
  return (
    <>
      <PageSEO
        title={`Research - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Research
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Take a look at a list of recommended research for further exploring.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {researchData.map((d, key) => (
              <ResearchCard
                key={key}
                title={`${d.topic}`}
                links={d.links}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
