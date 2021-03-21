import Timer from '../components/Timer';
import styled from 'styled-components';

export default function Ohm() {
  return (
    <OhmWrapper>
      <Heading>Willkommen</Heading>
      <p>Nimm dir 30 Sekunden Zeit.</p>
      <p>Frag dich: Wie geht es mir?</p>
      <p>Bereit?</p>
      <Timer seconds={''} />
    </OhmWrapper>
  );
}

const Heading = styled.h1``;

const OhmWrapper = styled.div`
  margin: 2rem;
  padding: 1rem;
  text-align: center;
`;
