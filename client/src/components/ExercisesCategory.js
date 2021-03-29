import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ExercisesCategory({ exercises }) {
  const [categoryExercise, setcategoryExercise] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/exercises/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setcategoryExercise(data);
      })
      .catch((err) => console.log('Error 400'));
  }, []);

  const { category } = useParams();

  const filteredExercises = category
    ? filterExercisesByCategory(category, exercises)
    : exercises;

  return (
    <div>
      <h1>Exercise Category</h1>
      {filteredExercises.map((exercise) => (
        <Link to={'/exercisesCategory/:category/' + exercise._id}>
          <p>{exercise.titel}</p>
        </Link>
      ))}
    </div>
  );
}

//Filter auf category: nur wenn category ausgewählt in Pfad, dann wird category gezeigt
//toLowerCase -> vergleicht klein geschriebene category, weil in meiner db ist großgeschrieben..
function filterExercisesByCategory(category, exercises) {
  return exercises.filter(
    (exercise) => exercise.category.toLowerCase() === category
  );
}

/* {exercises
.filter((exercise) => exercise.category === 'Augen')
.map((exercise) => (
  <p>{exercise}</p>
))} */

//useEffect API abfragen -> id rausholen einzeln exercise
