export default function SectionContainer({ cn, children }) {
  return (
    <div className={cn ? `${cn}` : null}>
      <div className="mx-auto flex max-w-3xl flex-col px-4 sm:px-6 xl:max-w-5xl xl:px-0 ">
        {children}
      </div>
    </div>
  )
}
