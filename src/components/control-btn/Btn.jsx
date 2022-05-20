import React from 'react';

import './styles.css';

export default function Btn({name, handler}) {
  return (
    <div className='button-container'>
        <button className='btn' onClick={handler}>{name}</button>
    </div>
  )
}
