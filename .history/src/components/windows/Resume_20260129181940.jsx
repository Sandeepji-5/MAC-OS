import React from 'react'
import MacWindow from './MacWindow'

 const Resume = () => {
  return (
    <MacWindow>
        <div className="resume-window">
            <iframe src="/Resume.pdf" frameborder="0"></iframe>
        </div>
    </MacWindow>
  )
}

export default Resume