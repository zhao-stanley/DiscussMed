const MissionItems = () => {
  return (
    <>
      <div className="mt-8 flex flex-col justify-between gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-500 p-[0.625rem] text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
            <h1 className="text-xl font-bold">Topic Driven Blogs</h1>
          </div>
          <p className="text-gray-300 dark:text-gray-900">
            Read our blog posts on different diseases every week.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-12 rounded-xl bg-gradient-to-br from-blue-400 to-blue-800 p-[0.625rem] text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
              />
            </svg>
            <h1 className="text-xl font-bold">Expert podcasts</h1>
          </div>
          <p className="text-gray-300 dark:text-gray-900">
            Listen to podcasts by medical professionals about different diseases.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-800 p-[0.625rem] text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
              />
            </svg>
            <h1 className="text-xl font-bold">Numerous resources</h1>
          </div>
          <p className="text-gray-300 dark:text-gray-900">
            Novel research summaries to Facebook groups, all in one place.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-12 rounded-xl bg-gradient-to-tl from-[#1f6c8a] to-[#34E89E] p-[0.625rem] text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h1 className="text-xl font-bold">Research journal</h1>
          </div>
          <p className="text-gray-300 dark:text-gray-900">
            A journal showcasing and commending student research with biological applications.
          </p>
        </div>
      </div>
    </>
  )
}

export default MissionItems;