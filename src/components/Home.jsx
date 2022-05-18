import React from "react";


function Home() {
  
  return (
    <React.Fragment>

  <Banner/>
  <div className="container p-3">
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">
              ¡Bienvenido a nuestro Sitio web!
            </h1>
            <p>
              Este sitio web fue diseñado con la intencion de dar a conocer más información sobre los Sistemas de Información Geográfica, así como una manera de evaluación de nuestros conocimientos de los mismos.
            </p>
          </div>
          <div class="col-lg-6">
            <h1 class="font-weight-light">
              Instituciones
            </h1>
            <p>
              
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  </React.Fragment>

  );
}

export default Home;
