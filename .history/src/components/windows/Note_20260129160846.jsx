import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import MacWindow from './MacWindow';



 const Note = () => {

  return (
    <MacWindow>
      <div className="note-window">
        {markdown ? <Markdown>{markdown}</Markdown> : <p>Loading...</p>}
      </div>
    </MacWindow>
  );
};

export default Note;