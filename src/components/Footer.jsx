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
            <a href="https://www.youtube.com"  target="_blank"
                  className="youtube social">
                  <FontAwesomeIcon icon={faYoutube} size="1x" />
                </a>
                <a href="https://www.facebook.com" target="_blank"
                  className="facebook social">
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </a>
                <a href="https://www.twitter.com" target="_blank" className="twitter social">
                  <FontAwesomeIcon icon={faTwitter} size="1x" />
                </a>
                <a href="https://www.instagram.com" target="_blank"
                  className="instagram social">
                  <FontAwesomeIcon icon={faInstagram} size="1x" />
                </a>   
                <a href="https://www.Linkedin.com" target="_blank"
                  className="instagram social">
                  <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </a>   
            
          </p>
                
        </div>
      </footer>
    </div>
  );
}

export default Footer;
