import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import ContactForm from "./contacto";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './perfil-empty.png';
import ContactForm from "./contacto";
import 'bootstrap/dist/css/bootstrap.min.css';

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
              Instituciones que promueven el uso de Sistemas de SIGS
            </h1>
            <Carousel/>
          </div>
         <h2 >CONOCÉ A NUESTRO EQUIPO DE INVESTIGADORES</h2>
        </div>
          <div class="row" >
               <div class="col-md-3 col-sm-3">
                <div className="image">
                  <img src={Image} />
                </div>
                <h3>Nombre</h3>
                <p>títulos académicos y experiencia profesional</p>  
              </div>
              <div class="col-md-3 col-sm-3">
                <div className="image">
                  <img src={Image} />
                </div>
                <h3>Nombre</h3>
                <p>títulos académicos y experiencia profesional</p>  
              </div>
              <div class="col-md-3 col-sm-3">
                <div className="image">
                  <img src={Image} />
                </div>
                <h3>Nombre</h3>
                <p>títulos académicos y experiencia profesional</p>  
              </div>
        </div>
        <div className="py-6">
          <div className="py-6">
          <ContactForm />
        </div>
         
         
        </div>
        
      </div>
      
    </div>
    </div>
  </React.Fragment>

  );
}

export default Home;
