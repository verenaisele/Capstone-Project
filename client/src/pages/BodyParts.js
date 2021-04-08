import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BodyPartOverview } from '../assets/bodyPartOverview.svg';
import { ReactComponent as Mark } from '../assets/Mark.svg';
import HeaderNav from '../components/HeaderNav';

export default function BodyParts({ resetTimer }) {
  resetTimer(false);
  return (
    <BodypartsWrapper>
      <HeaderNav />
      <section>
        <h2>Wähle...</h2>
        <h4>
          welchem Bereich deines Körpers möchtest du dich heute besonders
          widmen?
        </h4>
      </section>
      <Body>
        <div>
          <BodyPartOverview />
        </div>

        <div className="Kopf">
          <Link to="/Uebungen_Ueberblick/kopf">
            <Mark />
          </Link>
          <h5>Kopf</h5>
        </div>

        <div className="Augen">
          <Link to="/Uebungen_Ueberblick/augen">
            <Mark />
          </Link>
          <h5>Augen</h5>
        </div>

        <div className="Nacken">
          <Link to="/Uebungen_Ueberblick/nacken">
            <Mark />
          </Link>
          <Nacken>Nacken</Nacken>
        </div>

        <div className="Rücken">
          <Link to="/Uebungen_Ueberblick/rücken">
            <Mark />
          </Link>
          <h5>Ruecken</h5>
        </div>

        <div className="Schulter">
          <Link to="/Uebungen_Ueberblick/schulter">
            <Mark />
          </Link>
          <h5>Schulter</h5>
        </div>

        <div className="Handgelenke">
          <Link to="/Uebungen_Ueberblick/handgelenke">
            <Mark />
          </Link>
          <h5>Handgelenk</h5>
        </div>
      </Body>
    </BodypartsWrapper>
  );
}
const Nacken = styled.h5`
  margin-left: -10rem;
`;

const BodypartsWrapper = styled.section`
  color: var(--black);
  section {
    margin: 2rem 1rem 2.5rem 1.5rem;
  }
`;
const Body = styled.div`
  display: grid;
  grid-template: 1.25rem 2rem 6rem 5rem 3.5rem 3.5rem 10rem 10rem / 1rem 7.5rem 0.5rem 2.5rem 2rem 1.5rem 8.5rem;

  div {
    grid-row: 1;
  }
  .Kopf {
    color: var(--black);
    display: flex;
    grid-row: 2;
    grid-column: 7;
  }

  .Augen {
    display: flex;
    grid-row: 3;
    grid-column: 4;
  }
  .Nacken {
    display: flex;
    grid-row: 4;
    grid-column: 5;
  }
  .Rücken {
    display: flex;
    grid-row: 6;
    grid-column: 3;
  }
  .Schulter {
    display: flex;
    grid-row: 5;
    grid-column: 6;
  }
  .Handgelenke {
    display: flex;
    grid-row: 7;
    grid-column: 6;
  }
`;
