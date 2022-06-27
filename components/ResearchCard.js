import Link from './Link'

const ResearchCard = ({ title, links }) => (
  <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
    <div
      className={`overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h2>
        <ul className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">
          {links.map((e, key) => (
            <li key={key} className="select-none">
              • <Link href={e.href}>{e.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default ResearchCard
