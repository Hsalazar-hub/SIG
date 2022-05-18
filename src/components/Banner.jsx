
import React,{ } from "react";
import Banner1 from './Banner1.png';
import Banner2 from './Banner2.png';


function Banner()
{
  
 return(
  <React.Fragment>
  
   <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">   
  
    <div className="carousel-item active">
      <img src={ Banner1} className="d-block w-100" alt='...'/>
    </div>
    
      <div className="carousel-item ">
      <img src={ Banner2} className="d-block w-100" alt='...'/>
    </div>
  </div>
  
</div>
  </React.Fragment>

 );
}
export default Banner;