import React from 'react';

import './styles.css';

export default function TimeDisplay( {min, sec, time}) {
  return (
    <div className='time-display' >
        <div className="circle">
        <h3> min and sec are {min}:{sec} </h3>
        <h3> time is {time}</h3>
        </div>
    </div>
  )
}
