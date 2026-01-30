import './App.scss'
import './App.css'
import { Dock } from './components/Dock'
import {Nav} from './components/Nav'
import { MacWindow } from './components/windows/MacWindow'
import Github from './components/windows/Github'
function App() {

  return (  
    <>
      <main>
        <Nav/>
         {/* <MacWindow children='mera Bharat Mahaan'/>  */}
         <MacWindow>
                <h1>Hello dostooo...</h1>

         </MacWindow>
          <Github/>
        <Dock />

      </main>
    </>
  )
}

export default App
