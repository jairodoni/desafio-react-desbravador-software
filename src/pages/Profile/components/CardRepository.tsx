import { StarIcon } from "@primer/octicons-react";

export function CardRepository() {
  return (
    <div
      className="bg-light-subtle d-flex flex-column border border-light-subtle border-4 d-flex w-90 rounded-3 my-2 ms-2 me-1 p-2 hover-shadow fw-medium"
      style={{ maxHeight: "320px" }}
    >
      <div className="d-flex flex-row justify-content-between">
        <h3 className="fw-bold fs-3">Projeto Away</h3>
        <span className="fw-semibold">
          <StarIcon size={16} />  10
        </span>
      </div>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>
      <span className="fw-semibold text-end"> Update jan 10</span>
    </div>
  );
}