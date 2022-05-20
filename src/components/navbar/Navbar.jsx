import React from 'react';

import './styles.css';

export default function Navbar({handler}) {
  return (
    <nav className='navbar'>
        <div className="logo" onClick={handler}>
            <img className = "pumpkin" src="./assets/pumpkin-face.svg" alt="pumpkin" />
            <h1 className='website-title'>pumpkin-timer</h1>
        </div>
    </nav>
  )
}
