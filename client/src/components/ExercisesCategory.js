import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Like } from '../assets/like.svg';
import { ReactComponent as Previous } from '../assets/previous.svg';

export default function ExercisesCategory({
  exercises,
  onAddToFavorite,
  favoriteExercises,
}) {
  const { category } = useParams();

  const filteredExercises = category
    ? filterExercisesByCategory(category, exercises)
    : exercises;

  return (
    <CategoryCard>
      <Header>
        <h1>{category.toUpperCase()}-Übungen</h1>
        <Link to={'/Bodyparts'}>
          <Previous />
        </Link>
      </Header>

      {filteredExercises.map((exercise) => (
        <ExerciseWrapper>
          <img src={exercise.titelImg} alt="details for each exercise" />
          <section>
            <Link to={'/Uebungen_Ueberblick/' + category + '/' + exercise._id}>
              <h2>Übung</h2>
              <h3>{exercise.titel}</h3>
            </Link>
            <div>
              <button onClick={() => onAddToFavorite(exercise)}>
                <Like
                  className={
                    isFavorite(favoriteExercises, exercise) ? 'unlike' : 'like'
                  }
                />
              </button>
            </div>
          </section>
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
function isFavorite(favoriteExercises, exercise) {
  return favoriteExercises.some(
    (favoriteExercise) => favoriteExercise._id === exercise._id
  );
}

const Header = styled.section`
  display: flex;
  justify-content: space-between;
`;

const CategoryCard = styled.section`
  margin: 2rem 1rem 3rem 1rem;
`;

const ExerciseWrapper = styled.div`
  display: flex;
  margin: 2rem 0rem 3rem 0rem;
  color: var(--white);

  section {
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
  div {
    grid-row: 2;
    grid-column: 3;
    height: 1.5rem;
    width: 1rem;
  }
  button {
    background: none;
    border: none;
  }
  .unlike {
    fill: var(--secondary-light);
  }
  .like {
    fill: #fff;
  }
`;
