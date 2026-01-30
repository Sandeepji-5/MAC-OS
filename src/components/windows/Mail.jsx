
import MacWindow from './MacWindow';
import SyntaxHighlighter from 'react-syntax-highlighter';
const Note = () => {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        fetch('./note.txt')
            .then(res => res.text())
            .then(text => setMarkdown(text))
    }, []);

    return (
        <MacWindow  windowName={windowName} setWindowsState={setWindowsState}>
            <div className="note-window">
                {markdown ? <SyntaxHighlighter language="javascript" style={atelierDuneDark}>
                    {markdown}
                </SyntaxHighlighter> : <p>Loading...</p>}
            </div>
        </MacWindow>
    );
};

export default Note;
