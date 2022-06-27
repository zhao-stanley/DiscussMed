import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 bg-gradient-to-tl from-[#1f6c8a] to-[#34E89E] bg-clip-text text-sm font-bold uppercase text-transparent transition-[3s] hover:hue-rotate-30">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
