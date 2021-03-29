import { useEffect, useState } from 'react';
import Ohm from './pages/Ohm';
import ExercisesCategory from './components/ExercisesCategory';
import BodyParts from './pages/BodyParts';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [exercises, setExercises] = useState([]);
  const [timerExpired, setTimerExpired] = useState(false);

  //Verknüpfung back and front
  useEffect(() => {
    fetch('http://localhost:4000/exercises')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setExercises(data);
      })
      .catch((err) => console.log('Error 400'));
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/exercisesCategory">
          {exercises && <ExercisesCategory exercises={exercises} />}
        </Route>
        <Route path="/exercisesCategory/:category">
          {exercises && <ExercisesCategory exercises={exercises} />}
        </Route>
        <Route exact path="/">
          {timerExpired ? (
            <BodyParts />
          ) : (
            <Ohm onTimerExpired={setTimerExpired} />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
