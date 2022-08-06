import OfflineArt from '@/components/OfflineArt'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'

export default function Offline() {
  return (
    <>
      <PageSEO title={`You Are Offline`} description={siteMetadata.description} />
      <div className="flex h-auto min-h-screen w-full flex-col items-center justify-center gap-y-8 pt-28">
        <h1 className="text-center text-3xl font-bold text-black dark:text-white md:text-4xl 2xl:text-5xl">
          You are offline.
          <br />
          Please reconnect to the internet.
        </h1>
        <OfflineArt />
      </div>
    </>
  )
}
