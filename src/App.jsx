import './App.scss'
import './App.css'
import { Dock } from './components/Dock'
import {Nav} from './components/Nav'
import  Note from './components/windows/Note'
import Github from './components/windows/Github'
import Resume from './components/windows/Resume'
import Cli from './components/windows/Cli'
import Spotify from './components/windows/Spotify'
import { useState } from 'react'




function App() {
  const [windowsState, setWindowsState] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false,
  });

  
  return (  
    <>
      <main>
        <Nav/>{}
        <Dock windowsState={windowsState} setWindowsState={setWindowsState}/>

        {windowsState.github && <Github windowName="github" windowsState={windowsState} setWindowsState={setWindowsState} />}
        {windowsState.note && <Note windowName="note" windowsState={windowsState} setWindowsState={setWindowsState} />}
        {windowsState.resume && <Resume windowName="resume" windowsState={windowsState} setWindowsState={setWindowsState} />}
        {windowsState.spotify && <Spotify windowName="spotify" windowsState={windowsState} setWindowsState={setWindowsState}/>}
        {windowsState.cli && <Cli windowName="cli" windowsState={windowsState} setWindowsState={setWindowsState} />}
      
          {/* <Github/>
          <Note/>
          <Resume/>
          <Spotify/>
          <Cli/> */}
       
      </main>
    </>
  ) 
}

export default App
