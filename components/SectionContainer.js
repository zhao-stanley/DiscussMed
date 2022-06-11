export default function SectionContainer({ cn, children }) {
  return <div className={`mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 flex flex-col ${cn}`}>{children}</div>
}
