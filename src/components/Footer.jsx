import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="footer">
      <footer class="py-3 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; Sitio Web Sobre SIG. 
            Creado Por Héctor Salazar, Lewis Narváez y Wuilmer Pulgar.   
              Siguenos: 
            <a href="https://www.youtube.com"
                  className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a>
                <a href="https://www.facebook.com"
                  className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://www.twitter.com" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
                <a href="https://www.instagram.com"
                  className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>   
                <a href="https://www.Linkedin.com"
                  className="instagram social">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>   
            
          </p>
                
        </div>
      </footer>
    </div>
  );
}

export default Footer;
