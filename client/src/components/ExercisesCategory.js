import { useParams } from 'react-router';

export default function ExercisesCategory({ exercises }) {
  const { category } = useParams();

  const filteredExercises = category
    ? filterExercisesByCategory(category, exercises)
    : exercises;

  return (
    <div>
      <h1>Exercise Category</h1>
      {filteredExercises.map((exercise) => (
        <p>{exercise.titel}</p>
      ))}
    </div>
  );
}

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
