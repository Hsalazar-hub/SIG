import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: require('./Carousel/Esri.jpg')
  },
  {
    src: require('./Carousel/qgis.jpg')
  },
  {
    src: require('./Carousel/AerolaserSystem.jpg')
  },
  {
    src: require('./Carousel/googlemaps.jpg')
  },
  {
    src: require('./Carousel/hexagon.jpg')
  },
  {
    src: require('./Carousel/SIGIS.jpg')
  },
  {
    src: require('./Carousel/TYCGIS.jpg')
  },
  {
    src: require('./Carousel/Unigis.jpg')
  }
  
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;