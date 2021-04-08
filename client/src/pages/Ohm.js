import styled from 'styled-components';
import ohmBackground from '../assets/ohmBackground.png';
import Timer from '../components/Timer';
import HeaderNav from '../components/HeaderNav';

export default function Ohm({ onTimerExpired }) {
  return (
    <OhmWrapper>
      <HeaderNav />
      <section>
        <Heading>Willkommen</Heading>
        <p>Nimm dir 30 Sekunden Zeit.</p>
        <p>Frag dich: Wie geht es mir?</p>
        <p>Bereit?</p>
      </section>
      <div>
        <Timer onTimerExpired={onTimerExpired} seconds={''} />
      </div>
    </OhmWrapper>
  );
}

const Heading = styled.h1`
  font-size: var(--fs-950);
  padding-bottom: 3rem;
`;

const OhmWrapper = styled.div`
  background-image: url(${ohmBackground});
  background-repeat: no-repeat;
  color: var(--black);
  display: grid;
  grid-template: 75px 250px 100px 100px 100px/ 375px;
  height: 844px;
  width: 390px;
  text-align: center;

  section {
    grid-row: 2;
  }
  div {
    grid-row: 3;
  }
`;
