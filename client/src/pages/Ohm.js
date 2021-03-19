import Timer from '../components/Timer';
import styled from 'styled-components';

export default function Ohm() {
  return (
    <div>
      <Heading>Willkommen</Heading>
      <p>Nimm dir 30 Sekunden Zeit.</p>
      <p>Frag dich: Wie geht es mir?</p>
      <p>Bereit?</p>
      <Timer seconds={''} />
    </div>
  );
}

const Heading = styled.h1`
  background-color: lightgreen;
`;
