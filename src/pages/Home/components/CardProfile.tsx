import styles from '../../../styles/home.module.css'
import { Link } from 'react-router-dom';

export function CardProfile() {
  return (
    <Link to='/profile'
      className={`${"bg-light-subtle d-flex flex-row border border-light-subtle border-4 d-flex w-90 rounded-3 my-2 ms-2 me-1 p-1 hover-shadow"}, ${styles.cardProfile}`}
      style={{ maxHeight: "256px" }}
    >
      <div className={styles.imageProfile}>
        <img
          src="https://avatars.githubusercontent.com/u/38520302?v=4"
          className="rounded-3 float-start border-0 me-2 d-block"
          alt="profile image"
        />
      </div>
      <div className={`${"container-sm d-flex flex-column justify-content-between text-sm"}, ${styles.fontProfile}`} >
        <span className="fw-bold fs-1">Jairo Doni</span>
        <div className="h-100 d-flex flex-column justify-content-around">
          <div>
            <span className="text-sm-start">Seguidores * 100 | </span>
            <span>Seguindo * 100</span>
          </div>
          <span>exemplo@email.com</span>
          <p className={styles.truncate}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown.
          </p>
        </div>
      </div>
    </Link >
  );
}