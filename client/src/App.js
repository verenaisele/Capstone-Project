import { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import BodyParts from './pages/BodyParts';
import Favorites from './pages/Favorites';
import Ohm from './pages/Ohm';
import ExerciseCard from './components/ExerciseCard';
import ExercisesCategory from './components/ExercisesCategory';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const [exercises, setExercises] = useState([]);
  const [timerExpired, setTimerExpired] = useState(false);

  const [favoriteExercises, setfavoriteExercises] = useLocalStorage(
    'Favorites',
    []
  );

  useEffect(() => {
    fetch('http://localhost:4000/exercises')
      .then((res) => res.json())
      .then((exerciseData) => {
        setExercises(exerciseData);
      })
      .catch((err) => console.error(err.message));
  }, []);

  //add und ablgeich ob schon in liste
  function addToFavorite(exerciseToAdd) {
    const favoriteAlreadyExists = favoriteExercises.find(
      (exercise) => exerciseToAdd._id === exercise._id
    );
    if (favoriteAlreadyExists) {
      setfavoriteExercises(favoriteExercises);
    } else {
      setfavoriteExercises([...favoriteExercises, exerciseToAdd]);
    }
  }

  const removeFromFavorite = (id) => {
    const updatedFavorites = favoriteExercises.filter(
      (exercise) => exercise._id !== id
    );
    setfavoriteExercises(updatedFavorites);
  };

  console.log(favoriteExercises);
  return (
    <div>
      <Switch>
        <Route exact path="/Uebungen_Ueberblick">
          {exercises && (
            <ExercisesCategory key={exercises.id} exercises={exercises} />
          )}
        </Route>
        <Route exact path="/Uebungen_Ueberblick/:category">
          {exercises && (
            <ExercisesCategory
              exercises={exercises}
              onAddToFavorite={addToFavorite}
              favoriteExercises={favoriteExercises}
            />
          )}
        </Route>

        <Route path="/Uebungen_Ueberblick/:category/:id">
          {exercises && <ExerciseCard exercises={exercises} />}
        </Route>

        <Route path="/Favorites">
          <Favorites
            favoriteExercises={favoriteExercises}
            onRemoveFavorite={removeFromFavorite}
          />
        </Route>

        <Route path="/Bodyparts">
          <BodyParts resetTimer={setTimerExpired} />
        </Route>

        <Route exact path="/">
          {timerExpired ? (
            <Redirect from="/" to="/Bodyparts" />
          ) : (
            <Ohm onTimerExpired={setTimerExpired} />
          )}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
