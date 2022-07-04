import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Resources() {
  return (
    <>
      <PageSEO
        title={`Resources - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resources
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Looking for more? Check out recommended research for further exploration, our curated
            podcasts for on the go listening, or our tips on disease/disorder advocacy.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            <Card
              text={'Explore now'}
              title={'Research'}
              description={`Take a look at a list of recommended research for further exploring.`}
              imgSrc={`/static/images/research.svg`}
              href={'/research'}
            />
            <Card
              text={'Listen now'}
              title={'Podcasts'}
              description={`Listen to our curated list of podcasts covering an extensive number of diseases/disorders.`}
              imgSrc={`/static/images/podcast.svg`}
              href={'/podcasts'}
            />
            <Card
              text={'View now'}
              title={'Partnerships'}
              description={`View resources we created in collaboration with our partners.`}
              imgSrc={`/static/images/partnership.svg`}
              href={'/partnerships'}
            />
            <Card
              text={'Learn more'}
              title={'Advocacy'}
              description={`Find out ways you can raise awareness and support efforts against different diseases/disorders.`}
              imgSrc={`/static/images/advocacy.svg`}
              href={'/advocacy'}
            />
          </div>
        </div>
      </div>
    </>
  )
}
