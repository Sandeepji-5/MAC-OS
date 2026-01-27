import React from 'react'
import './nav.scss'
export const Nav = () => {
  return (
    
    <nav>
            <div className='left'>
                <div className="apple-icon"> 
                    <img src="./navbar-icons/apple.svg" alt="" />
                </div>

                <div className="nav-item">
                    <p>Sandeep Vishwakarma</p>
                </div>
                <div className="nav-item">
                    <p>File</p>
                </div>
                <div className="nav-item">
                    <p>window</p>
                </div>
                <div className="nav-item">
                    <p>Sandeep Vishwakarma</p>
                </div>
                <div className="nav-item">
                    <p>Sandeep Vishwakarma</p>
                </div>
            </div>
            
            <div className='right'>Right</div>
    </nav>
  )
}



