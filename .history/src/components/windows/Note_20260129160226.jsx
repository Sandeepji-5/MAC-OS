import React from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import { useEffect, useState } from 'react'



 const Note = () => {

    const [markdown, setMarkdown] = useState(null);
    useEffect(()=>{
        fetch('./note.txt')
        .then((res=>res.txt))
        .then(text=>setMarkdown(text))
    })
  return (
   <MacWindow>
    <div className="note-window">   
        {markdown?<Markdown> {markdown}</Markdown>:<p>Loading.....</p>}
    </div>
   </MacWindow>
  )
}

export default Note