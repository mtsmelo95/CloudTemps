import React from 'react';


const Sunset = (props) => {
  return (
    <div className='componenteSunset'>
        <p>Pôr do sol</p>
        {props.sunset}
    </div>
  )
}

export default Sunset