import Link from 'next/link'
import { useState } from 'react'
import useLayoutEffect from '@/lib/utils/useIsomorphicLayoutEffect'

export default function PWA() {
  const [closed, setClosed] = useState(false)
  useLayoutEffect(() => {
    if (localStorage.getItem('pwaClosed') === 'true') {
      setClosed(true)
    }
  })

  return (
    <>
      {closed === true ? null : (
        <div
          className={`fixed bottom-6 z-[1] flex w-full items-center justify-center transition-[5s] ease-in-out xl:hidden`}
        >
          <div className="mx-2 flex w-full max-w-3xl flex-col items-center justify-between gap-y-2 rounded-2xl bg-primary-600 px-2 py-3 text-white shadow-lg sm:mx-4 sm:px-4">
            <div className="flex w-full flex-row items-center justify-between">
              <p className="flex w-full select-none flex-row items-center justify-center text-xs sm:text-lg md:justify-start">
                Press the
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-[0.125rem] h-auto w-6 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 30 30"
                >
                  <path d="M14.984 1a1 1 0 00-.691.293l-4 4a1 1 0 101.414 1.414L14 4.414V17a1 1 0 102 0V4.414l2.293 2.293a1 1 0 101.414-1.414l-4-4A1 1 0 0014.984 1zM9 9c-1.645 0-3 1.355-3 3v12c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V12c0-1.645-1.355-3-3-3h-2v2h2c.565 0 1 .435 1 1v12c0 .565-.435 1-1 1H9c-.565 0-1-.435-1-1V12c0-.565.435-1 1-1h2V9H9z"></path>
                </svg>
                icon and "Add to Home Screen"{' '}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-[0.125rem] h-auto w-6 cursor-pointer md:w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => {
                  setClosed(true)
                  localStorage.setItem('pwaClosed', true)
                }}
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="mx-2 flex w-full items-center justify-center">
              <Link href="/blog/pwa">
                <div className="flex w-full cursor-pointer justify-center rounded-lg bg-white px-3 py-2 font-semibold text-black shadow-lg transition-[5s] ease-linear hover:bg-gray-300">
                  <h1 className="w-fit select-none text-xs sm:text-base">What is this?</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
