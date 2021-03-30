import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import BodyParts from './pages/BodyParts';
import Ohm from './pages/Ohm';
import ExercisesCategory from './components/ExercisesCategory';
import ExerciseCard from './components/ExerciseCard';
import BodyParts from './pages/BodyParts';
import { Route, Switch } from 'react-router-dom';

function App() {
  const [exercises, setExercises] = useState([]);
  const [timerExpired, setTimerExpired] = useState(false);

  //Verknüpfung back and front
  useEffect(() => {
    fetch('http://localhost:4000/exercises')
      .then((res) => res.json())
      .then((exerciseData) => {
        console.log(data);
        setExercises(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/exercisesCategory">
          {exercises && (
            <ExercisesCategory key={exercises.id} exercises={exercises} />
          )}
        </Route>
        <Route exact path="/exercisesCategory/:category">
          {exercises && <ExercisesCategory exercises={exercises} />}
        </Route>
        <Route path="/exercisesCategory/:category/:id">
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
