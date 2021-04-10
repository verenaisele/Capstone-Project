import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
    <TimerWrapper>
      <button onClick={() => setCountDown(3)}>Start</button>
      <h1>{countDown}</h1>
    </TimerWrapper>
  );
}

const TimerWrapper = styled.div`
  h1 {
    color: var(--white);
    font-size: 14rem;
  }
  button {
    background: var(--black);
    color: var(--white);
    border-style: none;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(255, 255, 255, 0.5);
    font-size: var(--fs-200);
    letter-spacing: 0.05rem;

    margin-bottom: 40px;

    padding: 0.4rem 0.8rem;
  }
`;
