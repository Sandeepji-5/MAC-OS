import React from 'react'
import './dock.scss'

export const Dock = ({ windowsState, setWindowsState }) => {
  return (

    <footer className='dock'>
      <div
        className="icon github"
        onClick={() => setWindowsState({ ...windowsState, github: true })}
      >
        <img src="/public/doc-icons/github.svg" alt='' />
      </div>
      <div className="icon calender" onClick={()=>window.open("https://calendar.google.com/")}><img src="/public/doc-icons/calender.svg" alt='' /></div>
      <div className="icon link" onClick={()=>window.open("https://www.linkedin.com/in/sandy108/")}><img src="/public/doc-icons/link.svg" alt='' /></div>
      <div className="icon mail" onClick={()=>window.open("https://mail.google.com/")}><img src="/public/doc-icons/mail.svg" alt='' /></div>
      <div className="icon note" onClick={() => setWindowsState({ ...windowsState, note: true })}><img src="/public/doc-icons/note.svg" alt='' /></div>
      <div className="icon spotify" onClick={() => setWindowsState({ ...windowsState, spotify: true })}><img src="/public/doc-icons/spotify.svg" alt='' /></div>
      <div className="icon pdf" onClick={() => setWindowsState({ ...windowsState, resume: true })}><img src="/public/doc-icons/pdf.svg" alt='' /></div>
      <div className="icon cli" onClick={() => setWindowsState({ ...windowsState, cli: true })}><img src="/public/doc-icons/cli.svg" alt='' /></div>
    </footer>
  )
}

