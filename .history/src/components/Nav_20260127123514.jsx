import React from 'react'
import './nav.scss'
export const Nav = () => {
  return (
    // <div className="nav">Nav Bar  created </div>
    <nav>
            <div className='left'>
                <div className="apple-icon"> 
                    <img src="./public/navbar-icon/apple.svg" alt="" />
                </div>
            </div>
            
            <div className='right'>Right</div>
    </nav>
  )
}



