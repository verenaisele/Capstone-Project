import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BodyPartOverview } from '../assets/bodyPartOverview.svg';
import { ReactComponent as Mark } from '../assets/Mark.svg';
import backgroundPages from '../assets/backgroundPages.svg';

export default function BodyParts() {
  return (
    <BodypartsWrapper>
      <section>
        <h1>Wähle...</h1>
        <p>
          welchem Bereich deines Körpers möchtest du dich heute besonders
          widmen?
        </p>
      </section>
      <div>
        <BodyPartOverview />
      </div>
      <div className="Augen">
        <Link to="/Uebungen_Ueberblick/augen">
          <Mark />
        </Link>
        <p>Augen</p>
      </div>

      <div className="Nacken">
        <Link to="/Uebungen_Ueberblick/nacken">
          <Mark />
        </Link>
        <p>Nacken</p>
      </div>

      <div className="Rücken">
        <Link to="/Uebungen_Ueberblick/rücken">
          <Mark />
        </Link>
        <p>Rücken</p>
      </div>
    </BodypartsWrapper>
  );
}

const BodypartsWrapper = styled.section`
  background: url(${backgroundPages});
  background-repeat: no-repeat;
  color: var(--black);

  display: grid;
  grid-template: 50px 175px 50px 100px 100px 100px 100px/ 50px 60px 75px 75px 75px;
  height: 844px;
  width: 390px;

  section {
    grid-row: 2;
    grid-column: 2 / -1;
  }
  div {
    grid-row: 3;
  }
  .Augen {
    color: var(--black);
    display: flex;
    grid-row: 4;
    grid-column: 4;
  }
  .Nacken {
    color: var(--white);
    display: flex;
    grid-row: 5;
    grid-column: 4;
  }
  .Rücken {
    color: var(--black);
    display: flex;
    grid-row: 7;
    grid-column: 3;
  }
`;
