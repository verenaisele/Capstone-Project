import Timer from '../components/Timer';
import styled from 'styled-components';
import kugelbild from '../assets/Kugelbild_komplett.jpg';

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
  text-align: center;
  background: url(${kugelbild});
`;
