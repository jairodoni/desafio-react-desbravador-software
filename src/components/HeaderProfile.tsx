interface User {
  name: string
  avatarUrl: string
  followers: number
  following: number
  email: string
  bio: string
}

interface HeaderProfileProps {
  user: User
}

export function HeaderProfile({ user }: HeaderProfileProps) {
  return (
    <div
      className="bg-light-subtle d-flex flex-row border border-light-subtle border-4 d-flex w-90 rounded-3 my-2 ms-2 me-1 p-2 hover-shadow"
      style={{ maxHeight: "320px" }}
    >
      <div className="imageProfile">
        <img
          src={user.avatarUrl}
          className="rounded-3 float-start border-0 me-2 d-block"
          alt="profile image"
        />
      </div>

      <div className="container-sm  d-flex flex-column justify-content-between text-sm fontProfile" >
        <span className="fw-bold fs-1">{user.name}</span>



        <div className="h-100 d-flex flex-column justify-content-around">
          <div>
            <span>Email: {user.email}</span>
            <span>Seguidores {user.followers}</span>
            <span>Seguindo {user.following}</span>
          </div>
          <p>
            {user.bio}
          </p>
        </div>
      </div>
    </div>
  );
}