import { useState } from 'react';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Work from './components/Work/Work';
import Education from './components/Education/Education';

function App () {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Nav />
      <Main />
      <Work />
      <Education />
    </div>
  )
}

export default App
