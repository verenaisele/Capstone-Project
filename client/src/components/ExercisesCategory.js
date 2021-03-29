export default function ExercisesCategory({ exercises }) {
  return (
    <div>
      <h1>Exercise Category</h1>
      {exercises.map((exercise) => (
        <p>{exercise.title}</p>
      ))}
    </div>
  );
}

/* {exercises
.filter((exercise) => exercise.category === 'Augen')
.map((exercise) => (
  <p>{exercise}</p>
))} */
