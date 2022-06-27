import Link from './Link'

const JournalCard = ({ text, topic, href, authors }) => (
  <div className="md p-4 md:w-1/2">
    <Link target="_blank" href={href}>
      <div
        className={`overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{topic}</h2>

          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
            by {authors.join(', ')}
          </p>
          {href && (
            <span
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${topic}`}
            >
              {text} &rarr;
            </span>
          )}
        </div>
      </div>
    </Link>
  </div>
)

export default JournalCard
