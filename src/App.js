import React, { useState } from "react";
import "./App.css";
import About from "./components/About/About";
import Cover from "./components/Cover/Cover";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProjectCardList from "./components/ProjectCardList/ProjectCardList";
import { project_list } from "./Utils/Projects";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
   const [projects] = useState(project_list);

   return (
      <Router>
         <Navbar />
         <Routes>
            <Route index element={<Cover />} />
            <Route path="portfolio" element={<Cover />} />
            <Route path="about" element={<About />} />
            <Route
               path="projects"
               element={<ProjectCardList projects={projects} />}
            />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<Contact />} />
         </Routes>
         <Footer />
      </Router>
   );
}

export default App;
