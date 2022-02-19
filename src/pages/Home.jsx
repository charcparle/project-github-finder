import UserResults from "../components/users/UserResults"
function Home() {
  return (
    <>
    <h1 className="text-6xl">Looking for someone?</h1>
      {/* search box */}
      <UserResults />
    </>
  )
}

export default Home