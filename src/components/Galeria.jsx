import React from "react";
import marcgis from './marcgis.jpg';
import ScrollButton from './ScrollButton'
import mqgis from './mqgis.jpg';
import msaga from './msaga.jpg'
import milwis from './milwis.jpg'
import mgrass from './mgrass.jpg'
import Banner from "./Banner";
function Galeria() {
  return (
    <React.Fragment>
        <Banner/>
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
            <h1 class="font-weight-light">Mapas hechos con SIG</h1>
          
            <div class="col-lg-0">
            
            <h1 class="font-weight-light">ArcGis</h1>
           
            <p>
                
            Los mapas hechos con ArcGis contienen un mapa base, un conjunto de capas de datos (muchos de los cuales incluyen ventanas emergentes interactivas con información sobre los datos), una extensión y herramientas de navegación para el desplazamiento panorámico y el zoom. En general, los mapas base y las capas están alojados y se comparten a través de ArcGIS Online. Sin embargo, los mapas también pueden contener capas agregadas directamente al mapa y capas y mapas base a los que se hace referencia externamente. Muchos mapas también contienen símbolos escalados y otros elementos de estilo inteligentes que revelan datos y patrones a medida que interactúas con ellos.
            </p>
            <img  
              src ={marcgis} className="float" ></img>
            <h1 class="font-weight-light">QGIS</h1>
            <p>
            Con QGIS se puede realizar análisis de datos espaciales en bases de datos espaciales y otros formatos compatibles con OGR. QGIS ofrece actualmente análisis de vectores, análisis de ráster, muestreo, geoprocesamiento, geometría y herramientas de administración de bases de datos. También puede utilizar las herramientas integradas de GRASS, que incluyen la funcionalidad completa de GRASS de más de 400 módulos (consulte la sección Integracion GRASS SIG). O bien, puede trabajar con el complemento de procesamiento, que proporciona un marco de análisis geoespacial poderoso para llamar a algoritmos nativos y de terceros de QGIS, como GDAL, SAGA, GRASS, R y más.
            </p>
            <img  
              src ={mqgis} className="float" width="500" height="350"></img>
            <h1 class="font-weight-light">SAGA GIS</h1>
            <p>
            Principalmente utilizado para el análisis del terreno,  sombreado de colinas, la extracción de cuencas hidrográficas y el análisis de visibilidad. Las herramientas de morfometría son únicas, incluyendo el índice de humedad topográfica SAGA y la clasificación de la posición topográfica. Incluye módulos para geoestadística, clasificación de imágenes, proyecciones, simulación de procesos dinámicos (hidrología, desarrollo del paisaje) y análisis del terreno. Se puede acceder a la funcionalidad a través de una GUI, la línea de comando o usando la API de C++.
            </p>
            <img  
              src ={msaga} className="float" width="500" height="350"></img>
            <h1 class="font-weight-light">GRASS GIS</h1>
            <p>
            GRASS GIS sobresale principalmente como una opción de software GIS gratuito para análisis, procesamiento de imágenes, manipulación digital del terreno y estadísticas. GRASS SIG incluye herramientas para el modelado espacial, visualización de datos raster y datos vectoriales, gestión y análisis de datos geoespaciales y el procesamiento de imágenes aéreas y de satélite. Viene con un marco temporal para el procesamiento de series de tiempo avanzada y una API de Python para la programación rápida geoespacial.
            
            </p>
            <img  
              src ={mgrass} className="float" width="500" height="350"></img>
               <h1 class="font-weight-light">ILWIS</h1>
            <p>
            ILWIS  tiene sólidas capacidades de procesamiento de imágenes y puede manejar tanto gráficos rasterizados como gráficos vectoriales. Los gráficos de trama se componen de mapas de bits o píxeles. Los gráficos vectoriales son gráficos que se almacenan y procesan como fórmulas matemáticas, lo que permite una mejor resolución que los gráficos rasterizados. ILWIS se ha vuelto popular entre muchos usuarios debido a su combinación de sólidas capacidades de procesamiento de imágenes, interfaz fácil de usar, bajo costo, buen soporte en forma de guías de usuario y manuales y una amplia gama de características de GIS y detección remota.
            
            </p>
            <img  
              src ={milwis} className="float" width="500" height="350"></img>
          </div>
        </div>
      </div>
    </div>
    </div>
    <ScrollButton />

    </React.Fragment>
  );
}

export default Galeria;