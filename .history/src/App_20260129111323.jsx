import './App.scss'
import './App.css'
import { Dock } from './components/Dock'
import {Nav} from './components/Nav'
import { MacWindow } from './components/windows/MacWindow'
function App() {

  return (
    <>
      <main>
        <Nav/>
         <MacWindow/> 
        <Dock />

      </main>
    </>
  )
}

export default App
