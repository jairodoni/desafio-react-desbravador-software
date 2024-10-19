import { Link } from 'react-router-dom';
import styles from '../../../styles/home.module.css'

interface User {
  name: string
  avatarUrl: string
  followers: number
  following: number
  email: string
  bio: string
}

interface CardProfileProps {
  user: User
}

export function CardProfile({ user }: CardProfileProps) {

  return (
    <Link to='/profile'
      className={`bg-light-subtle d-flex flex-row border border-light-subtle border-4 d-flex w-90 rounded-3 my-2 ms-2 me-1 p-1 hover-shadow ${styles.cardProfile}`}
      style={{ maxHeight: "256px" }}
    >
      <div className={styles.imageProfile}>
        <img
          src={user.avatarUrl}
          className="rounded-3 float-start border-0 me-2 d-block"
          alt="profile image"
        />
      </div>
      <div className={`container-sm d-flex flex-column justify-content-between text-sm ${styles.fontProfile}`} >
        <span className="fw-bold fs-1">{user.name}</span>
        <div className="h-100 d-flex flex-column justify-content-around">
          <div>
            <span>Seguidores * {user.followers} | </span>
            <span>Seguindo * {user.following}</span>
          </div>
          <span>Email: {user.email}</span>
          <p className={styles.truncate}>
            {user.bio}
          </p>
        </div>
      </div>
    </Link >
  );
}