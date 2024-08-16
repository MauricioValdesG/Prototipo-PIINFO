import Dashboard from "./components/Dashboard";
import "./Subject.css";

const Subject = () => {
  return (
    <div className="subject-container d-flex flex-column vh-100">
      <div className="d-flex flex-grow-1">
        <Dashboard />
        <div className="content p-4 flex-grow-1">
          <h1>Cursos actuales</h1>
          <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Unidad 1: Introducción a la ciberseguridad
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <div className="mb-3">
                    <button
                      className="btn btn-link text-left w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOneSectionOne"
                      aria-expanded="true"
                      aria-controls="collapseOneSectionOne"
                    >
                      Fundamentos de la ciberseguridad
                    </button>
                    <div id="collapseOneSectionOne" className="collapse">
                      <ul className="list-unstyled pl-3">
                        <li>- Concepto de ciberseguridad.</li>
                        <li>- Principales objetivos de la ciberseguridad.</li>
                        <li>- Importancia de la ciberseguridad.</li>
                        <li>- Brechas de seguridad y sus consecuencias.</li>
                      </ul>
                      <button className="btn btn-primary">
                        Realizar prueba de la sección
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-link text-left w-100"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOneSectionTwo"
                      aria-expanded="false"
                      aria-controls="collapseOneSectionTwo"
                    >
                      Elementos clave de la ciberseguridad
                    </button>
                    <div id="collapseOneSectionTwo" className="collapse">
                      <button className="btn btn-primary">
                        Realizar prueba de la unidad
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Unidad 2: Seguridad de los datos
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <button className="btn btn-primary">
                    Realizar prueba de la unidad
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subject;
