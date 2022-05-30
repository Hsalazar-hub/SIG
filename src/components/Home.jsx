import React from "react";
import Banner from "./Banner";
import Carousel from "./Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import hector from './hector.jpg';
import lewis from './lewis.jpg';
import wuilmer from './wuilmer.jpg';
import ContactForm from "./contacto";
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollButton from './ScrollButton';

function Home() {
  
  return (
    <React.Fragment>
      
      <ScrollButton />
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
          <div class="col-lg-7">
            <h1 class="font-weight-light">
              ¡Bienvenido a nuestro Sitio web!
            </h1>
            <p>
              Este sitio web fue diseñado con la intención de dar a conocer más información sobre los Sistemas de Información Geográfica, así como una manera de evaluación de nuestros conocimientos de los mismos.
            </p>
          </div>

          
         <h2 >CONOCE A NUESTRO EQUIPO DE INVESTIGADORES</h2>
        </div>
          <div class="row" >
               <div class="col-md-3 col-sm-3">
                <div className="image">
                  <img src={hector}  alt="Example1" width="150" height="150"/>
                </div>
                <h3>Héctor Salazar</h3>
                <p>Estudiante de informática de la UDONE. Experiencia en PHP, ReactJs, y NodeJs.</p>  
              </div>
              <div class="col-md-3 col-sm-3">
                <div className="image" >
                  <img src={wuilmer} alt="Example1" width="150" height="150"/>
                </div>
                <h3>Wuilmer Pulgar</h3>
                <p>Estudiante de informática de la UDONE. Experiencia en PHP, NodeJs, ReactJs.</p>  
              </div>
              <div class="col-md-3 col-sm-3">
                <div className="image">
                  <img src={lewis} alt="Example1" width="150" height="150"/>
                </div>
                <h3>Lewis Narváez</h3>
                <p>Estudiante de informática de la UDONE. Experiencia en PHP, NodeJs, Java y Python.</p>  
              </div>
        </div>
        <hr></hr>
        <div class="row">
          <div class="col-lg-7">
            <h1>
              Instituciones que promueven el uso de SIGS
            </h1>
            <Carousel/>
          </div>
          <div className="py-6">
          <ContactForm />
          </div>
        
          <hr></hr>
         
        </div>
        
      </div>
      
    </div>
    </div>
    
  </React.Fragment>

  );
}

export default Home;
