import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
    
} from "react-router-dom";


import Home from "./views/HomeView/index";
import Content from "./views/ContentView/index";
import Region from "./views/RegionView/index";
import Blog from "./views/BlogView/index";
import Contact from "./views/ContactView/index";
import Category from "./views/CategoryView/index";
import NotFound from "./views/NotFoundView/index";
import Nav from "./components/MainMenu/Nav";


function App() {
  return (
    
      <Router>

      <Nav/>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/content" element={<Content/>}/>
          <Route path="/category" element={<Category/>}/>
          <Route path="/region" element={<Region/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>  
    
  );
}

export default App;
