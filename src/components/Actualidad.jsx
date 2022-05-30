import React from "react";

import act from './actualidad.png'
function Actualidad() {
  return (
    
    <div className="about">
      
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="float-left">
            <img  
              src ={act} className="float-left"></img>
          </div>
          <div class="col-lg-5">
            
            <h1 class="font-weight-light">SIG</h1>
            <p>
            <p>
              Un Sistema de Información Geográfica (SIG) es una herramienta para trabajar con información georreferenciada. La información  georreferenciada es aquella que viene acompañada de una posición geográfica. Para matizar la anterior definición, un SIG es un sistema que permite realizar una serie de operaciones:
            </p>
            <p>
              Lectura, edición, almacenamiento y gestión, de manera general, de datos espaciales.
            </p>
            <p>
            Análisis simples o complejos de datos espaciales. Este análisis puede llevarse a cabo sobre la componente espacial (la localización de cada valor o elemento) como sobre la componente temática (el valor o elemento en sí).
            </p>
            <p>
              Generación de resultados tales como mapas, informes, gráficos, etc.
            </p>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  
  );
}

export default Actualidad;
