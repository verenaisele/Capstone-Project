import React from 'react';
import Timer from '../components/Timer';
import styled from 'styled-components';

export default function Ohm() {
  return (
    <div>
      <Heading>Willkommen</Heading>
      <p>Nimm dir 60 Sekunden Zeit.</p>
      <p>Frag dich: Wie geht es mir?</p>
      <p>Bereit?</p>
      <button>START</button>
      <Timer />
    </div>
  );
}

const Heading = styled.h1`
  background-color: lightgreen;
`;
