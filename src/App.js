import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from  './components/Footer';
import { createGlobalStyle } from 'styled-components';
import emailjs from 'emailjs-com';
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  section {
    scroll-margin-top: 80px;
  }
`

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;