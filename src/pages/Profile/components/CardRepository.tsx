import { StarIcon } from "@primer/octicons-react";
import { Link } from "react-router-dom";
import { ptBR } from 'date-fns/locale';
import { format } from "date-fns";

import styles from '../../../styles/profile.module.css'

interface Repository {
  nameRepository: string
  stars: number
  technology: string
  description: string
  linkRepository: string
  lastUpdateDate: Date
}

interface CardRepositoryProps {
  repository: Repository
}

export function CardRepository({ repository }: CardRepositoryProps) {
  return (
    <Link to='/repository'
      className={`bg-light-subtle d-flex flex-column border border-light-subtle border-4 d-flex w-90 rounded-3 my-2 ms-2 me-1 p-2 hover-shadow fw-medium ${styles.cardRepository}`}
      style={{ maxHeight: "320px" }}
    >
      <div className="d-flex flex-row justify-content-between">
        <h3 className="fw-bold fs-3">{repository.nameRepository}</h3>
        <span className="fw-semibold">
          <StarIcon size={16} />  {repository.stars}
        </span>
      </div>
      <p>{repository.description}</p>
      <span className="fw-semibold text-end">
        {
          format(
            new Date(repository.lastUpdateDate),
            'dd MMM yyyy',
            {
              locale: ptBR,
            }
          )
        }</span>
    </Link>
  );
}