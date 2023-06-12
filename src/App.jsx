import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Work from './components/Work/Work';
import Education from './components/Education/Education';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App () {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Main />
      <Education />
      <Work />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
