import Timer from '../components/Timer';
import styled from 'styled-components';
import { ReactComponent as Ohm_background } from '../assets/Ohm_background.svg';

export default function Ohm() {
  return (
    <OhmWrapper>
      <Ohm_background />
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
  text-align: center;
`;
