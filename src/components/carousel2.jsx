import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
 
  {
    src: require('./Carousel/qgis.jpg')
  },
 
  {
    src: require('./Carousel/GRASS.jpg')
  },
  {
    src: require('./Carousel/ilwis.png')
  },
  {
    src: require('./Carousel/saga.png')
  },
  {
    src: require('./Carousel/arcgis.jpg')
  },
 
  
];

const Carousel2 = () => <UncontrolledCarousel items={items} />;

export default Carousel2;