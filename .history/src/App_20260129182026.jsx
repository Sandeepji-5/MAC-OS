import './App.scss'
import './App.css'
import { Dock } from './components/Dock'
import {Nav} from './components/Nav'
import  Note from './components/windows/Note'
import Github from './components/windows/Github'
import Resume from './components/windows/Resume'
function App() {

  return (  
    <>
      <main>
        <Nav/>
          <Github/>
          <Note/>
          <Resume/>
        <Dock/>
      </main>
    </>
  ) 
}

export default App
