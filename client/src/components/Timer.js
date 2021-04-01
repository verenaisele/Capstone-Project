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
  }
  h1 {
    margin-top: 100px;
    color: var(--white);
  }
`;
