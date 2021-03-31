import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

export default function ExercisesCategory({ exercises }) {
  const { category } = useParams();

  const filteredExercises = category
    ? filterExercisesByCategory(category, exercises)
    : exercises;

  return (
    <div>
      <h1>Exercise Category</h1>
      {filteredExercises.map((exercise) => (
        <Link to={'/Uebungen_Ueberblick/' + category + '/' + exercise._id}>
          <p>{exercise.titel}</p>
        </Link>
      ))}
    </div>
  );
}

function filterExercisesByCategory(category, exercises) {
  return exercises.filter(
    (exercise) => exercise.category.toLowerCase() === category
  );
}
