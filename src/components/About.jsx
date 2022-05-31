import React from "react";
import Geo from './Geocomp.jpg'
import ScrollButton from './ScrollButton';

function About() {
  return (
    <React.Fragment>
      
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
              src ={Geo} className="float-left"></img>
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
          <div class="col-lg-0">
            
            <h1 class="font-weight-light">EVOLUCION DE LOS SIG</h1>
            <p>
            Los SIG como ciencia surge a finales de la década de los 60, producto de los avances tecnológicos desarrollados a nivel de las ciencia computacional con la aplicación de las nuevas técnicas de generación de cartografía digital.
            </p>
            <p>
            Para la década de los 70, los SIG se extendieron por todas partes, las principales universidad, centros de investigación y organismos estatales comenzaron a desarrollar prototipos de SIG, adecuándolos a sus necesidades y aplicando sus potencialidades para la toma de decisiones.
            </p>
            <p>
           Para la década de los 80, todo cambio, el auge de la computadora personal, motivó a que los sistemas de gestión de datos espaciales y las aplicaciones SIG, comenzaran a explotar el exponencial crecimiento de cómputo, que ahora estaba disponible en las empresas y en general en todos los hogares.
            </p>
            <p>
           
            El surgimiento de la tecnología Web, a finales de la década de los 90, creo las condiciones idóneas para la nueva evolución de los SIG Web, permitiendo la accesibilidad a las aplicaciones y fortaleciendo la generación de datos espaciales de todo tipo y su interoperabilidad con la utilización de los estándares desarrollados para compartir, de forma eficiente, la información espacial en un entorno completamente digital.
            </p>
            <p>
            Ya en esta última década, la información espacial representa una porción grande del total de los datos que se comparten en la red. La necesidad de geo información crece y posiblemente siga creciendo a medida que pase el tiempo.
            </p>
            </div>
        </div>
      </div>
    </div>
    <ScrollButton />
    </React.Fragment>
  );
}

export default About;
