import React from "react";

import act from './actualidad.png'
function Aplicaciones() {
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
            
            <h1 class="font-weight-light">Aplicaciones</h1>
            
            <h1 class="font-weight-light">Cartografía automatizada</h1>
            <p>
            Las entidades públicas han implementado este componente de
los SIG en la construcción y mantenimiento
de planos digitales de cartografía. Dichos planos son
puestos a disposición de las empresas a las
que puedan resultar de utilidad estos productos con la
condición de que estas entidades se encargan
posteriormente de proveer versiones actualizadas de manera
periódica.
            </p>
            <h1 class="font-weight-light">Infraestructura</h1>
            <p>
            Algunos de los primeros sistemas SIG fueron utilizados por las
empresas encargadas del desarrollo, mantenimiento y
administración de redes de electricidad,
gas, agua, teléfono, alcantarillado, etc.; en este
caso, los sistemas SIG almacenan información
alfanumérica de servicios
relacionados con las distintas representaciones gráficas
de los mismos. Estos sistemas almacenan información
relativa a la conectividad de los elementos representados
gráficamente, con el fin de realizar un análisis de
redes.
            </p>
            <h1 class="font-weight-light">Gestión territorial</h1>
            <p>
            Son aplicaciones SIG dirigidas a la gestión de entidades
territoriales y permiten un rápido acceso a la
información gráfica y alfanumérica, y
suministran herramientas para el análisis espacial de la
información. Facilitan labores de mantenimiento de
infraestructura, mobiliario urbano, etc., y permiten realizar una
optimización en los trabajos de mantenimiento de empresas
de servicios. Tienen la facilidad de generar documentos con
información gráfica y
alfanumérica.
            </p>
            
           
          </div>
          
        </div>
      </div>
    </div>
  
  );
}

export default Aplicaciones;