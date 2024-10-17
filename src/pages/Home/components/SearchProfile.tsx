export function SearchProfile() {
  return (
    <div
      className="bg-dark d-flex flex-column border border-light-subtle border-4
    d-flex w-100 rounded-3 my-2 ms-2 me-1 p-4"
    >
      <span id="inputGroup-sizing-default" className="mb-2 fw-bold fs-5">Busque um perfil</span>

      <div className="input-group mb-3">
        <input type="text" className="form-control fs-5" placeholder="ex: jorge" aria-label="Recipient's username" aria-describedby="button-addon2" />
        <button className="btn btn-secondary fs-5 fw-bold" type="button" id="button-addon2">Buscar</button>
      </div>
    </div>
  );
}