import React, { useEffectEvent } from 'react'
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import { useEffect, useState } from 'react'



export const Note = () => {

    const [markdown, setMarkdown] = useState(null);
    useEffect(()=>{
        fetch('./note.txt')
        .then((res=>res.txt))
        .then(text=>set)


    })
  return (
   <MacWindow>



   </MacWindow>
  )
}
