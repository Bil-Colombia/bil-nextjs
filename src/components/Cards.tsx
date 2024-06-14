import DataProfile from "./DataProfile"

function Cards() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 auto-rows-max">
      <DataProfile />
    </div>
  )
}

export default Cards