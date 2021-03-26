import { useEffect, useState } from 'react';
import Ohm from './pages/Ohm';
import ExercisesCategory from './components/ExercisesCategory';

function App() {
  //Verknüpfung back and front
  const [exercises, setExercises] = useState([]);

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
      <Ohm />
    </div>
  );
}
// {/* {exercises && <ExercisesCategory exercises={exercises} />} */}

export default App;
