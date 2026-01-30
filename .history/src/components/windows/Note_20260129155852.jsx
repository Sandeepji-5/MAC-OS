import React, { useEffectEvent } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import { useEffect, useState } from 'react'



export const Note = () => {

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
