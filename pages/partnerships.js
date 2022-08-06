import siteMetadata from '@/data/siteMetadata'
import partnerships from '@/data/partnerships'
import { PageSEO } from '@/components/SEO'
import PartnershipCard from '@/components/PartnershipCard'

export default function Partnerships() {
  return (
    <>
      <PageSEO
        title={`Partnerships - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 pt-28 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Partnerships
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            View our resources created in conjunction with our partners below!
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {partnerships.map((d) => (
              <PartnershipCard
                text={d.href.length > 0 ? `View resource` : `Coming soon`}
                key={d.name}
                title={`${d.name}`}
                description={d.description}
                imgSrc={`/static/images/partners/${d.imgSrc}`}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
