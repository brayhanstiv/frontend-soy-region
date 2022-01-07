import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
    
} from "react-router-dom";


import Inicio from "./views/Inicio";
import Contenidos from "./views/Contenidos";
import Categorias from "./views/Categorias";
import Entretenimiento from "./views/Entretenimiento";
import Regiones from "./views/Regiones";
import Contacto from "./views/Contacto";
import NotFound from "./views/NotFound";
import Nav from "./components/MainMenu/Nav";


function App() {
  return (
    
      <Router>

      <Nav/>
      
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/contenidos" element={<Contenidos/>}/>
          <Route path="/categorias" element={<Categorias/>}/>
          <Route path="/entretenimiento" element={<Entretenimiento/>}/>
          <Route path="/regiones" element={<Regiones/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>  
    
  );
}

export default App;
