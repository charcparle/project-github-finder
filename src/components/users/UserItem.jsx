function UserItem({user}) {
  return (
    <div>
      user
      <h3>{user.id}</h3>
      <p>{user.login}</p>
      <div>
          <img width={200} src={user.avatar_url} />
      </div>
    </div>
  )
}

export default UserItem
