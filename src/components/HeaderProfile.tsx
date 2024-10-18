export function HeaderProfile() {
  return (
    <div
      className="bg-light-subtle d-flex flex-row border border-light-subtle border-4 d-flex w-90 rounded-3 my-2 ms-2 me-1 p-2 hover-shadow"
      style={{ maxHeight: "320px" }}
    >
      <div className="imageProfile">
        <img
          src="https://avatars.githubusercontent.com/u/38520302?v=4"
          className="rounded-3 float-start border-0 me-2 d-block"
          alt="profile image"
        />
      </div>

      <div className="container-sm  d-flex flex-column justify-content-between text-sm fontProfile" >
        <span className="fw-bold fs-1">Jairo Doni</span>



        <div className="h-100 d-flex flex-column justify-content-around">
          <div>
            <span>exemplo@email.com</span>
            <span>Seguidores 100</span>
            <span>Seguindo 100</span>
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown.
          </p>
        </div>
      </div>
    </div>
  );
}