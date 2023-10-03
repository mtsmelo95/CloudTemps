import React from 'react';
import Sunrise from './Sunrise';
import Sunset from './Sunset';

const TempHora = (props) => {
  const currentHour = new Date().getHours()+1;
  const currentMinute = new Date().getTime()
  const next12Hours = [];

  for (let i = currentHour; i < currentHour + 20; i++) {
    const hour = i % 24; // Garante que não exceda 24 horas
    next12Hours.push(hour);
  }

  return (
    <div className='tempHora'>
      <div className='componenteTempHora' style={{ display: 'flex' }}>
        {next12Hours.map((hour, index) => (
          <div className="componenteInternoTempHora" key={index}>
            <span>{hour}:00</span><br/> {props.temperature2[hour]}°
          </div>
        ))}
      </div>
      {currentHour <= 12 && props.sunrise && (
        <Sunrise sunrise={props.sunrise} />
      )}
      {currentHour >= 12 && props.sunset && (
        <Sunset sunset={props.sunset} />
      )}
    </div>
  );
}

export default TempHora;
