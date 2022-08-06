import siteMetadata from '@/data/siteMetadata'
import podcastData from '@/data/podcastData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'

export default function Podcasts() {
  return (
    <>
      <PageSEO title={`Podcasts - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 pt-28 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Podcasts
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            If you're ever on the go, and you feel like learning more about a specific disease, take
            a listen to one of these podcasts! We've curated an extensive list of podcasts to listen
            to while you're on the go.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {podcastData.map((d) => (
              <Card
                text={'Listen now'}
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={`/static/images/podcasts/${d.imgSrc}`}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
