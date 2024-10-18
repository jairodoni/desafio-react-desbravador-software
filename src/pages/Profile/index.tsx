import { CardRepository } from './components/CardRepository';
import { HeaderProfile } from '../../components/HeaderProfile';

import styles from '../../styles/profile.module.css'
import { useProfileGitHub } from '../../hooks/useProfileGitHub';

export default function Profile() {
  const { user } = useProfileGitHub();

  return (
    <main className="container-xxl d-flex flex-column h-100">
      <HeaderProfile user={user} />
      <div
        className="bg-dark w-100 h-100 border border-light-subtle border-4 rounded-3 my-2
        me-2 ms-1 p-1"
      >
        <div className="container-xxl mh-75 d-flex flex-column justify-content-start overflow-y-scroll"
          style={{ height: "75vh" }}
        >
          <div className='d-flex flex-row justify-content-between mx-2 my-2'>
            <span className='fw-bold fs-4 d-flex align-items-center'>Repositorios</span>

            <div className='d-flex flex-row'>
              <div
                className='border border-1 border-secondary mx-2 h-100'
                style={{ width: '2px', height: '100%' }}
              />
              <div className={`d-flex flex-row align-items-center mx-2 ${styles.sortButtons}`}>
                <button type="button" className="fw-bold fs-6 ms-2">Mais estrelas</button>
                <button type="button" className="fw-bold fs-6">Últimos updates</button>
              </div>
            </div>
          </div>

          <CardRepository />
          <CardRepository />
          <CardRepository />
          <CardRepository />
          <CardRepository />
          <CardRepository />
          <CardRepository />
          <CardRepository />
        </div>
      </div>
    </main>
  );
}