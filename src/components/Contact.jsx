import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-0">
            <h1 class="font-weight-light">Componentes</h1>
            <p>
            Otra forma de ver el sistema es contemplando los elementos básicos que lo componen. Tradicionalmente son 5 los elementos principales: datos, métodos, software, hardware y factor organizativo (personas).
            </p>
            <h1 class="font-weight-light">Datos</h1>
            
            <p>
            Los datos son la materia prima para trabajar con los Sistemas de Información Geográfica (SIG). Sin ellos, no podremos construir productos de información o mapas que nos ayuden a hacer nuestros análisis y tomar las decisiones en nuestra organización. Esos datos podrán venir de diferentes fuentes: sensores remotos, GPS, fotografías aéreas, archivos formatos shapefile, archivos CAD, archivos Excel, etc.
            </p>
            <h1 class="font-weight-light">Software</h1>
            <p>
            Para el correcto análisis e interpretación de la información geográfica es necesaria la participación de un software SIG que tenga la potencia y funcionalidad de trabajar con información de este tipo.
            </p>
            <h1 class="font-weight-light">Hardware</h1>
            <p>
            Como es lógico, para poder utilizar algunos de los software anteriormente mencionados es necesario un ordenador o hardware. Dependiendo de las características de esta máquina, obtendremos un mayor o menor rendimiento a la hora de realizar nuestros análisis
            </p>
            <h1 class="font-weight-light">Recursos humanos</h1>
            <p>
            Una vez tenemos los datos y con qué analizarlos, necesitamos saber cómo. Aquí es donde entramos en juego los profesionales SIG. Y es que el profesional SIG es un perfil muy cuestionado (y demandado) en los últimos años, ya que existen muchas tareas dentro de un análisis SIG, las cuales necesitan de uno o varios profesionales, incluso profesionales temáticos. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
