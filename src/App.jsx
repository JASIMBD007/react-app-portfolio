import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

function App () {


  return (
    <div>
      <Nav />
      <Main />
      <Education />
      <Work />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
