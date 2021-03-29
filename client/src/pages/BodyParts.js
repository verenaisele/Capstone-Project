import styled from 'styled-components';
import { ReactComponent as BodyParts_overview } from '../assets/Bodypart_overview.svg';
import { ReactComponent as Mark } from '../assets/Mark.svg';
import background_pages from '../assets/background_pages.svg';
import ExercisesCategory from '../components/ExercisesCategory';

import { Route, Switch, Link } from 'react-router-dom';

export default function BodyParts() {
  return (
    <BodypartsWrapper>
      <h1>Wähle...</h1>
      <p>
        welchem Bereich deines Körpers möchtest du dich heute besonders widmen?
      </p>
      <BodyParts_overview />
      <div className="Augen">
        <Link to="/exercisesCategory">
          <Mark />
        </Link>
        <p>Augen</p>
      </div>

      <div className="Nacken">
        <Link to="/exercisesCategory">
          <Mark />
        </Link>
        <p>Nacken</p>
      </div>

      <div className="Rücken">
        <Link to="/exercisesCategory">
          <Mark />
        </Link>
        <p>Rücken</p>
      </div>

      <Switch>
        <Route exact path="/">
          <h3>TEST</h3>
        </Route>
        <Route path="/exercisesCategory">
          <ExercisesCategory />
        </Route>
      </Switch>
    </BodypartsWrapper>
  );
}

const BodypartsWrapper = styled.section`
  background: url(${background_pages});
  color: var(--black);
  height: 844px;

  display: grid;
  grid-template: 100px 200px 200px / 375px;
`;
