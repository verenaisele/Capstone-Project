import Timer from '../components/Timer';
import styled from 'styled-components';
import Ohm_background from '../assets/Ohm_background.svg';

export default function Ohm() {
  return (
    <OhmWrapper>
      <section>
        <Heading>Willkommen</Heading>
        <p>Nimm dir 30 Sekunden Zeit.</p>
        <p>Frag dich: Wie geht es mir?</p>
        <p>Bereit?</p>
      </section>
      <div>
        <Timer seconds={''} />
      </div>
    </OhmWrapper>
  );
}

const Heading = styled.h1`
  font-size: var(--fs-950);
  padding-bottom: 1.5rem;
`;

const OhmWrapper = styled.div`
  background: url(${Ohm_background});
  color: var(--black);
  display: grid;
  grid-template: 100px 200px 200px / 375px;
  height: 844px;
  text-align: center;

  section {
    grid-row: 2;
  }
  div {
    grid-row: 3;
  }
`;
