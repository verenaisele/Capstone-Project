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
        <h4>Nimm dir 30 Sekunden Zeit.</h4>
        <h4>Frag dich: Wie geht es mir?</h4>
        <h4>Bereit?</h4>
      </section>
      <div>
        <Timer onTimerExpired={onTimerExpired} seconds={''} />
      </div>
    </OhmWrapper>
  );
}
const HeaderNavStyle = styled(HeaderNav)`
  margin-top: 1rem;
`;

const Heading = styled.h1`
  font-size: var(--fs-950);
  padding-bottom: 2.5rem;
`;

const OhmWrapper = styled.div`
  background-image: url(${ohmBackground});
  background-repeat: no-repeat;
  color: var(--black);
  display: grid;
  grid-template: 1rem 6.5rem 13rem 4rem 4rem 4rem/ 375px;
  height: 844px;
  width: 390px;
  text-align: center;

  section {
    grid-row: 3;
  }
  div {
    grid-row: 4;
  }
`;
