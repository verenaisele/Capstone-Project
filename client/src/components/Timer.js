import React, { useState, useEffect } from 'react';

export default function Timer({ seconds }) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  //Funktion für Countdown
  const startCountdown = () => {
    setTimeLeft(timeLeft - 1);
  };

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(startCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div>
      <button onClick={() => setTimeLeft(10)}>Start Countdown</button>
      <h1>{timeLeft}</h1>
    </div>
  );
}
