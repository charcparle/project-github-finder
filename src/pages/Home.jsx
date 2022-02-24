import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"
function Home() {
  return (
    <>
    {/* <h4 className="text-6xl">Looking for someone?</h4> */}
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home