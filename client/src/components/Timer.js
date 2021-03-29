import React, { useState, useEffect } from 'react';
import BodyParts from '../pages/BodyParts';

export default function Timer({ seconds, onTimerExpired }) {
  const [countDown, setCountDown] = useState(seconds);

  //Funktion für Countdown
  const startCountdown = () => {
    setCountDown(countDown - 1);
  };

  useEffect(() => {
    if (!countDown) {
      countDown === 0 && onTimerExpired(true);
      return;
    }

    const intervalId = setInterval(startCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [countDown]);

  return (
    <div>
      <button onClick={() => setCountDown(3)}>Start</button>
      <h1>{countDown}</h1>
    </div>
  );
}
