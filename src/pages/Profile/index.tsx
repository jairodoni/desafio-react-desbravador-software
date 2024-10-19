import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom'
import { CardRepository } from './components/CardRepository';
import { HeaderProfile } from '../../components/HeaderProfile';
import { useProfileGitHub } from '../../hooks/useProfileGitHub';

import styles from '../../styles/profile.module.css'

interface Repository {
  nameRepository: string
  stars: number
  technology: string
  description: string
  linkRepository: string
  lastUpdateDate: Date
}

export default function Profile() {
  const [typeOrder, setTypeOrder] = useState("stars")
  const { user, repositories, setRepositories } = useProfileGitHub();

  useEffect(() => {
    orderBy()
  }, [typeOrder])

  const navigate = useNavigate()

  useEffect(() => {
    if (typeof user === "undefined") {
      navigate('/')
    }

    searchRepositories()
    orderBy()
  }, [])

  function orderBy() {
    if (repositories.length > 0) {
      const repositoriesSort = repositories.sort((repo01: Repository, repo02: Repository) => {
        if (typeOrder === "stars") {
          return repo02.stars - repo01.stars
        }
        if (typeOrder === "lastUpdate") {
          return new Date(repo02.lastUpdateDate) - new Date(repo01.lastUpdateDate)
        }
      })

      return repositoriesSort
    }
  }

  async function searchRepositories() {
    setRepositories([])
    if (typeof user !== "undefined") {
      const repositoriesListed = await api.get(`/users/${user.nickname}/repos`)

      if (repositoriesListed?.status === 200 && repositoriesListed?.data?.length > 0) {
        const listRepositoriesFormatted = repositoriesListed.data.map((repo) => ({
          nameRepository: repo.name,
          stars: repo.stargazers_count,
          technology: repo.language,
          description: repo.description,
          linkRepository: repo.html_url,
          lastUpdateDate: repo.updated_at
        }))

        setRepositories(listRepositoriesFormatted)
      }
    }
  }

  return (
    <main className="container-xxl d-flex flex-column h-100">
      {
        typeof user !== "undefined" && < HeaderProfile user={user} />
      }
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
                <button
                  type="button"
                  className="fw-bold fs-6 ms-2"
                  onClick={() => setTypeOrder("stars")}
                >
                  Mais estrelas
                </button>
                <button
                  type="button"
                  className="fw-bold fs-6"
                  onClick={() => setTypeOrder("lastUpdate")}
                >
                  Últimos updates
                </button>
              </div>
            </div>
          </div>
          {orderBy()?.map(repo => (
            <CardRepository key={repo.nameRepository} repository={repo} />
          ))}
        </div>
      </div>
    </main>
  );
}