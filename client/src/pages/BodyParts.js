import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BodyPartOverview } from '../assets/bodyPartOverview.svg';
import { ReactComponent as Mark } from '../assets/Mark.svg';
import backgroundPages from '../assets/backgroundPages.svg';

export default function BodyParts() {
  return (
    <BodypartsWrapper>
      <h1>Wähle...</h1>
      <p>
        welchem Bereich deines Körpers möchtest du dich heute besonders widmen?
      </p>
      <BodyPartOverview />
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
  height: 844px;

  display: grid;
  grid-template: 100px 200px 200px / 375px;
`;
