import React from 'react'
import { Rnd } from 'react-rnd'
import './window.scss'


export const MacWindow = () => {
    return (
        <>

            <Rnd>
                <div className="window">
                    <div className="nav">
                        <div className="red"></div>
                        <div className="yellow"></div>
                        <div className="green"></div>
                    </div>
                    <div className="main-content"></div>
                </div>

            </Rnd>
        </>


    )
}   
