import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ExercisesCategory({ exercises }) {
  const { category } = useParams();

  const filteredExercises = category
    ? filterExercisesByCategory(category, exercises)
    : exercises;

  //state draus machen...
  const count = (num) => num + 1;

  return (
    <CategoryCard>
      <h1>{category.toUpperCase()}-Übungen</h1>

      {filteredExercises.map((exercise) => (
        <ExerciseWrapper>
          <img src={exercise.titelImg} alt="details for each exercise" />
          <div>
            <h2>Übung {count(0)}</h2>
            <Link to={'/Uebungen_Ueberblick/' + category + '/' + exercise._id}>
              <p>{exercise.titel}</p>
            </Link>
          </div>
        </ExerciseWrapper>
      ))}
    </CategoryCard>
  );
}

function filterExercisesByCategory(category, exercises) {
  return exercises.filter(
    (exercise) => exercise.category.toLowerCase() === category
  );
}
const CategoryCard = styled.section`
  h1 {
    margin: 2rem 1rem 3rem 2rem;
  }
`;

const ExerciseWrapper = styled.div`
  display: flex;
  margin: 2rem 1rem 3rem 2rem;
  div {
    background: var(--black);
    border-radius: 1rem;
    color: var(--white);
    padding: 3rem 2rem;
    position: relative;
    top: 20px;
    right: -115px;
    width: 18rem;
  }
  p {
    text-decoration: none;
    color: var(--white);
  }

  img {
    position: absolute;
    z-index: 40;
  }
`;
