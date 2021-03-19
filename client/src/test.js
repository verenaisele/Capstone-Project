//Timer funktioniert auf Klick Start

import React, { useState, useEffect } from 'react';
import { ReactComponent as BodyParts } from '../assets/bodyPart_overview.svg';

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
      <button onClick={() => setTimeLeft(30)}>Start Countdown</button>
      <h1>{timeLeft}</h1>
      <BodyParts />
    </div>
  );
}

//Timer aus Internet

const Timer = ({ seconds }) => {
  // initialize timeLeft with the seconds prop
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    // exit early when we reach 0
    if (!timeLeft) return;
    //return nothing, when no time left

    // save intervalId to clear the interval when the
    // component re-renders
    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(intervalId);
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft]);

  return (
    <div>
      <h1>{timeLeft}</h1>
    </div>
  );
};
