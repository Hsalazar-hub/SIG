import React from "react";
import Carousel2 from "./carousel2";
import ScrollButton from './ScrollButton'
function Actualidad() {
  return (
    <React.Fragment>
      
    <ScrollButton />
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
          <Carousel2/>
          </div>
          <div class="col-lg-0">
            
            
            <h1 class="font-weight-light">SIG EN LA ACTUALIDAD</h1>
            
            
            <h1 class="font-weight-light">QGIS</h1>
            <p>
            QGIS es un Sistema de Información Geográfica de software libre y de código abierto para plataformas GNU/Linux, Unix, Mac OS, Microsoft Windows y Android.​ Fue uno de los primeros ocho proyectos de la Fundación OSGeo y en 2008 oficialmente superó la fase de incubación.
            </p>
           
            <h1 class="font-weight-light">ArcGIS</h1>
            <p>
            ArcGIS es el nombre de un conjunto de productos de software en el campo de los Sistemas de Información Geográfica o SIG. Producido y comercializado por ESRI, agrupando bajo el nombre genérico ArcGIS varias aplicaciones para la captura, edición, análisis, tratamiento, diseño, publicación e impresión de información geográfica. Estas aplicaciones se engloban en familias temáticas como ArcGIS Server, para la publicación y gestión web, o ArcGIS Móvil para la captura y gestión de información en campo.
            </p>
            <h1 class="font-weight-light">SAGA GIS</h1>
            <p>
            SAGA GIS (System for Automated Geoscientific Analyses) es uno de los clásicos en el mundo del software libre GIS. Habilita múltiples ventanas para presentar todos tus análisis (mapa, histogramas, gráficos de dispersión, atributos, etc.). Proporciona una interfaz gráfica de usuario y una API fáciles de usar.
            </p>
            <h1 class="font-weight-light">GRASS GIS</h1>
            <p>
            GRASS GIS (Geographic Resources Analysis Support System) fue desarrollado por el Cuerpo de Ingenieros del Ejército de los Estados Unidos como una herramienta para el manejo de la tierra y la planificación ambiental.
            </p>
            <h1 class="font-weight-light">ILWIS</h1>
            <p>
            ILWIS (Gestión Integrada de la Información sobre la Tierra y el Agua)es un software GIS gratuito para planificadores, biólogos, administradores del agua y usuarios geoespaciales. ILWIS es bueno en lo básico – digitalizar, editar y mostrar datos geográficos. Además, también se utiliza para la teledetección con herramientas de clasificación de imágenes, mejoras y manipulación de bandas espectrales.
            </p>
          </div>
          
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Actualidad;
