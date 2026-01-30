import './App.scss'
import './App.css'
import { Dock } from './components/Dock'
import {Nav} from './components/Nav'

import Github from './components/windows/Github'
function App() {

  return (  
    <>
      <main>
        <Nav/>
          <Github/>
          <Note/>
        <Dock/>
      </main>
    </>
  ) 
}

export default App
