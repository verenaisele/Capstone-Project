import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function ExercisesCategory({ exercises }) {
  const { category } = useParams();

  const filteredExercises = category
    ? filterExercisesByCategory(category, exercises)
    : exercises;

  return (
    <CategoryCard>
      <h1>{category.toUpperCase()}-Übungen</h1>

      {filteredExercises.map((exercise) => (
        <ExerciseWrapper>
          <img src={exercise.titelImg} alt="details for each exercise" />
          <div>
            <Link to={'/Uebungen_Ueberblick/' + category + '/' + exercise._id}>
              <h2>Übung</h2>
              <h3>{exercise.titel}</h3>
            </Link>
            <button>L</button>
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
  margin: 2rem 1rem 3rem 1rem;
`;

const ExerciseWrapper = styled.div`
  display: flex;
  margin: 2rem 0rem 3rem 0rem;
  color: var(--white);

  div {
    background: var(--black);
    border-radius: 1rem;
    display: grid;
    grid-template: 0.5rem 2rem 6.5rem 2rem / 2rem 9.5rem 2.5rem;
    position: relative;
    right: -115px;
    top: 20px;
    width: 14rem;
  }

  img {
    position: absolute;
    z-index: 40;
  }
  a {
    text-decoration: none;
    color: var(--white);
    grid-row: 3;
    grid-column: 2 / -1;
  }
  button {
    grid-row: 2;
    grid-column: 3;
    height: 1.5rem;
    width: 1rem;
  }
`;
