import siteMetadata from '@/data/siteMetadata'
import advocacyData from '@/data/advocacyData'
import AdvocacyCard from '@/components/AdvocacyCard'
import { PageSEO } from '@/components/SEO'

export default function Advocacy() {
  return (
    <>
      <PageSEO title={`Advocacy - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Advocacy
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Find out ways you can raise awareness and support efforts against different
            diseases/disorders.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {advocacyData.map((d, key) => (
              <AdvocacyCard
                text={`Get involved`}
                key={key}
                title={`${d.cause} - ${d.org}`}
                steps={d.steps}
                imgSrc={`/static/images/advocacy/${d.imgSrc}.png`}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
