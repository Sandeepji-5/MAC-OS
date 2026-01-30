import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'
const Spotify = ({windowName, setWindowsState}) => {
    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState}      width="30vw">
            <div className="spotify-window">
                {/* <iframe
                    title="Spotify Player"
                    data-testid="embed-iframe"
                    style={{ borderRadius: "12px", border: "none", minHeight: "200px", backgroundColor: "#191414" }}
                    src="https://open.spotify.com/embed/playlist/43at3cS3QsxTrSuAQiH3Bq?utm_source=generator"
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                /> */}

<iframe
    data-testid="embed-iframe"
    style={{ borderRadius: "12px" }}
    src="https://open.spotify.com/embed/playlist/43at3cS3QsxTrSuAQiH3Bq?utm_source=generator&theme=0"
    width="100%"
    height="352"
    frameBorder="0"
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
/>
            </div>



        </MacWindow>

    )
}


export default Spotify