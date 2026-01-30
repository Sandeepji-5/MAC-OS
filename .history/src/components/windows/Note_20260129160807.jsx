import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import MacWindow from './MacWindow';

const Note = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const res = await fetch("./note.txt");
        const text = await res.text();
        setMarkdown(text);
      } catch (error) {
        setMarkdown('Failed to load note.');
      }
    };
    fetchMarkdown();
  }, []);

  return (
    <MacWindow>
      <div className="note-window">
        {markdown ? <Markdown>{markdown}</Markdown> : <p>Loading...</p>}
      </div>
    </MacWindow>
  );
};

export default Note;