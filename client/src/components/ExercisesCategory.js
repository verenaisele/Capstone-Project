import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function ExercisesCategory({ exercises }) {
  console.log(exercises);
  const { category } = useParams();

  const filteredExercises = category
    ? filterExercisesByCategory(category, exercises)
    : exercises;

  return (
    <div>
      <h1>Exercise Category</h1>
      {filteredExercises.map((exercise) => (
        <Link to={'/exercisesCategory/' + category + '/' + exercise._id}>
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
