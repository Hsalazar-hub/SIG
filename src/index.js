import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Aplicaciones,
  Banner,
  ScrollButton,
  Actualidad,
  Galeria,
  ContactForm
} from "./components";


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/contacto" element={<ContactForm />} />
      <Route path="/Banner" element={<Banner />} />
      <Route path="/Galeria" element={<Galeria />} />
      <Route path="/Actualidad" element={<Actualidad />} />
      <Route path="/Aplicaciones" element={<Aplicaciones />} />
      <Route path="/ScrollButton" element={<ScrollButton />} />
      
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
