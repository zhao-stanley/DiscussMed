import siteMetadata from '@/data/siteMetadata'
import interviewData from '@/data/interviewData'
import InterviewCard from '@/components/InterviewCard'
import { PageSEO } from '@/components/SEO'

export default function Interviews() {
  return (
    <>
      <PageSEO
        title={`Interviews - ${siteMetadata.author}`}
        description={siteMetadata.description}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Interviews
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Curious to hear an expert discuss a certain topic? Take a listen to recorded interviews
            with medical experts about a variety of different diseases/disorders.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {interviewData.map((d) => (
              <InterviewCard
                text={`Download interview`}
                key={d.name}
                title={`Dr. ${d.name} - ${d.topic}`}
                description={d.description}
                imgSrc={`/static/images/interview/${d.imgSrc}`}
                href={`/static/interviews/${d.href}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
