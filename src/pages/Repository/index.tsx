import { ArrowLeftIcon, StarIcon } from "@primer/octicons-react";
import { HeaderProfile } from "../../components/HeaderProfile";
import { Link } from "react-router-dom";

import styles from '../../styles/repository.module.css'

export default function Repository() {
  const featuresList = ["Javascript"]
  return (
    <div className="container-xxl mh-75 d-flex flex-column justify-content-start"
      style={{ height: "75vh" }}
    >
      <HeaderProfile />
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
          <h3 className="fw-bold fs-3">Projeto Away</h3>

          <div className=" d-flex flex-row align-items-center justify-content-between">
            <StarIcon size={16} />
            <span className="fw-semibold ps-2">
              10
            </span>
          </div>
        </div>

        {featuresList && (
          <div>
            <span className="fw-semibold">Linguagen: </span>
            <span>Javascript</span>

          </div>
        )}
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>

        <div className={`fs-5 ${styles.rodape}`}>
          <div>
            <span>Repositorio GitHub: </span>
            <a href="#" className="link-primary link-opacity-50-hover">
              www.exemplorepositorio.com.br
            </a>
          </div>
          <span className="fw-semibold text-end fs-5"> Update jan 10</span>
        </div>
      </div>
    </div>
  );
}