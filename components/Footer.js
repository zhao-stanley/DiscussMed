import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  const startDateObj = new Date('January 1, 2022')
  const currentDateObj = new Date()
  const startYear = startDateObj.getFullYear()
  const currentYear = currentDateObj.getFullYear()
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex text-sm text-gray-500 dark:text-gray-400">
          <div>
            &copy; {startYear == currentYear ? currentYear : `${startYear}-${currentYear}`}{' '}
            {siteMetadata.author}
          </div>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400 text-center">
          No part of this website may be reproduced or commercialized in any manner without prior
          written permission.{" "}
          <Link href="/license" className="underline">Learn More.</Link>
        </div>
      </div>
    </footer>
  )
}
