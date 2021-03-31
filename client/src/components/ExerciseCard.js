import { useParams } from 'react-router';

export default function ExerciseCard({ exercises }) {
  const { id } = useParams();

  const findExercise = exercises.find((exercise) => {
    return exercise._id === id;
  });

  return (
    <div>
      <h1>Exercise CARD</h1>
      <p>{findExercise.titel}</p>
      <p>{findExercise.description}</p>
      {findExercise.imageURL.map((img) => {
        return <img src={img} />;
      })}
    </div>
  );
}

function filteredExercise(exercises, category, id) {
  return exercises.find((exercise) => {
    return exercise.category.toLowerCase() === category && exercise.id === id;
  });
}
