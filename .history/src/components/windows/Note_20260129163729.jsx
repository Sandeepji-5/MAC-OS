import React, { useEffect, useState } from 'react';
import Markdown from 'react-markdown';
import MacWindow from './MacWindow';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import './note.scss'
const Note = () => {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        fetch('./note.txt')
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, []);

    return (
        <MacWindow>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language="javascript" style={docco}>
                    {markdown}
                </SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow>
    );
};

export default Note;
