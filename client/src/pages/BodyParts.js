import { ReactComponent as BodyParts_overview } from '../assets/Bodypart_overview.svg';
import { ReactComponent as Mark } from '../assets/Mark.svg';
import ExercisesCategory from '../components/ExercisesCategory';

import { Route, Switch, Link } from 'react-router-dom';

export default function BodyParts() {
  return (
    <div>
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
    </div>
  );
}
