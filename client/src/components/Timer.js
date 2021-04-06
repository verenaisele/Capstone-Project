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
    color: var(--white);
  }
  button {
    border-style: none;
    border-radius: 5px;
    box-shadow: 3px 5px 7px;
    font-size: var(--fs-200);
    margin-bottom: 100px;

    padding: 0.4rem 0.8rem;
  }
`;
