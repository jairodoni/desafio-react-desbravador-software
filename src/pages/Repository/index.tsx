import { useEffect, useState } from "react";
import { ArrowLeftIcon, StarIcon } from "@primer/octicons-react";
import { Link, useNavigate } from "react-router-dom";
import { ptBR } from 'date-fns/locale';
import { format } from "date-fns";
import { useProfileGitHub } from "../../hooks/useProfileGitHub";
import { HeaderProfile } from "../../components/HeaderProfile";

import styles from '../../styles/repository.module.css'

export default function Repository() {
  const [dateLastUpdateRepositoryFormatted, setDateLastUpdateRepositoryFormatted] = useState("")

  const navigate = useNavigate()

  useEffect(() => {
    if (Object.keys(user).length === 0) {
      navigate('/')
    } else {
      setDateLastUpdateRepositoryFormatted(
        format(
          new Date(repositorySelected.lastUpdateDate),
          'dd MMM yyyy',
          {
            locale: ptBR,
          }
        ))
    }
  }, [])

  const { user, repositorySelected } = useProfileGitHub();

  return (
    <div className="container-xxl mh-75 d-flex flex-column justify-content-start"
      style={{ height: "75vh" }}
    >
      <HeaderProfile user={user} />
      <div
        className="bg-dark w-100 h-100 border border-light-subtle border-4 rounded-3 my-2
        me-2 ms-1 px-3 py-1 fs-4 d-flex flex-column justify-content-around"
      >
        <div className="d-flex justify-content-start border-bottom border-1 border-secondary">
          <Link to='/profile' className="btn btn-dark d-flex justify-content-center align-items-center mt-1 mb-3">
            <ArrowLeftIcon size={24} />

            <span className="fw-bold" style={{ marginLeft: '10px' }}>
              Voltar
            </span>
          </Link>
        </div>

        <div className="d-flex flex-row justify-content-between">
          <h3 className="fw-bold fs-3">{repositorySelected.nameRepository}</h3>

          <div className=" d-flex flex-row align-items-center justify-content-between">
            <StarIcon size={16} />
            <span className="fw-semibold ps-2">
              {repositorySelected.stars}
            </span>
          </div>
        </div>

        <div>
          <span className="fw-semibold">Linguagem: </span>
          <span>{repositorySelected.technology}</span>

        </div>

        <p>{repositorySelected.description}</p>

        <div className={`fs-5 ${styles.rodape}`}>
          <div>
            <span>Repositorio GitHub: </span>
            <a href={repositorySelected.linkRepository} target="_blank" className="link-primary link-opacity-50-hover">
              {repositorySelected.linkRepository}
            </a>
          </div>
          <span className="fw-semibold text-end fs-5">
            {dateLastUpdateRepositoryFormatted}
          </span>
        </div>
      </div>
    </div>
  );
}