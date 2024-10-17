import { SearchProfile } from "./components/SearchProfile";
import { CardProfile } from './components/CardProfile';

export default function Home() {
  const teste = [1]

  return (
    <main className="container-xxl d-flex flex-column h-100">
      <h1 className="text-center fw-bold fs-1">GitHub Profile</h1>
      <SearchProfile />
      <div
        className="bg-dark w-100 h-100 border border-light-subtle border-4 rounded-3 my-2
        me-2 ms-1 p-1"
      >
        {teste.length === 0 ? (
          <div className="h-100 d-flex justify-content-center align-items-center">
            <h1 className="fw-bold">Nada por aqui....</h1>
          </div>
        ) : (
          <div className="container-xxl mh-75 d-flex flex-column justify-content-start overflow-y-scroll"
            style={{ height: "75vh" }}
          >
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />
            <CardProfile />
          </div>
        )}
      </div>
    </main>
  );
}