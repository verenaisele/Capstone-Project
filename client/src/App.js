import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import BodyParts from './pages/BodyParts';
import Ohm from './pages/Ohm';
import ExerciseCard from './components/ExerciseCard';
import ExercisesCategory from './components/ExercisesCategory';

function App() {
  const [exercises, setExercises] = useState([]);
  const [timerExpired, setTimerExpired] = useState(false);

  useEffect(() => {
    fetch('http://localhost:4000/exercises')
      .then((res) => res.json())
      .then((exerciseData) => {
        setExercises(exerciseData);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/Uebungen_Ueberblick">
          {exercises && (
            <ExercisesCategory key={exercises.id} exercises={exercises} />
          )}
        </Route>
        <Route exact path="/Uebungen_Ueberblick/:category">
          {exercises && <ExercisesCategory exercises={exercises} />}
        </Route>
        <Route path="/Uebungen_Ueberblick/:category/:id">
          {exercises && <ExerciseCard exercises={exercises} />}
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
