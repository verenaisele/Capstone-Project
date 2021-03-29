import { useParams } from 'react-router';

export default function ExerciseCard({ exercises }) {
  const { category, id } = useParams();

  const findExercise = exercises.find((exercise) => {
    return exercise._id === id;
  });

  console.log(findExercise, 111);
  return (
    <div>
      <h1>Exercise CARD</h1>
      <p>{findExercise.titel}</p>
      <p>{findExercise.description}</p>
      <img src={findExercise.imageURL} />
    </div>
  );
}

function filteredExercise(exercises, category, id) {
  return exercises.find((exercise) => {
    return exercise.category.toLowerCase() === category && exercise.id === id;
  });
}
