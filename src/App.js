import React,{useState} from 'react';
import './App.css';
import About from './components/About/About';
import Cover from './components/Cover/Cover';
import Footer from './components/Footer/Footer';
import Navbar from "./components/Navbar/Navbar";
import ProjectCardList from './components/ProjectCardList/ProjectCardList';
import Scroll from './components/Scroll/Scroll';
import {project_list} from './Utils/Projects/Projects'
import Particles from 'react-particles-js';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 2000
      }
    }
  }
}

function App() {
  const[projects]=useState(project_list);
  return (
    <>
      <Navbar/>
      <Scroll>
        <Particles className='particles' params={particlesOptions}/>
        <Cover/>
        <About/>
        <ProjectCardList projects={projects}/>
        <Skills/>
        <Contact/>
        <Footer/>
      </Scroll>
      
    </>
  );
}

export default App;
