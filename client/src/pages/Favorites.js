import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderNav from '../components/HeaderNav';

export default function Favorites({ favoriteExercises, onRemoveFavorite }) {
  const { category } = useParams();

  return (
    <>
      <HeaderNav />
      <FavoriteCard>
        <h1>Merkliste</h1>
        {favoriteExercises && favoriteExercises.length > 0 ? (
          <p>
            {favoriteExercises.map((favoriteExercise) => (
              <FavroriteWrapper>
                <img
                  src={favoriteExercise.titelImg}
                  alt="details for each exercise"
                />
                <section>
                  <Link
                    to={
                      '/Uebungen_Ueberblick/' +
                      category +
                      '/' +
                      favoriteExercise._id
                    }
                  >
                    <h2>{favoriteExercise.titel}</h2>
                  </Link>
                  <div>
                    <button
                      onClick={() => onRemoveFavorite(favoriteExercise._id)}
                    >
                      X
                    </button>
                  </div>
                </section>
              </FavroriteWrapper>
            ))}
          </p>
        ) : (
          <h2>Bislang befinden sich noch keine Übungen in der Merkliste!</h2>
        )}
      </FavoriteCard>
    </>
  );
}

const FavoriteCard = styled.section`
  margin: 2rem 1rem 3rem 1rem;
`;
const FavroriteWrapper = styled.div`
  display: flex;
  margin: 2rem 0rem 3rem 0rem;
  color: var(--white);

  section {
    background: var(--black);
    border-radius: 1rem;
    display: grid;
    grid-template: 2rem 6.5rem 2rem / 2rem 9.5rem 2.5rem;
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
    grid-row: 2;
    grid-column: 2 / -1;
  }
  div {
    grid-row: 2;
    grid-column: 3;
    height: 1.5rem;
    width: 1rem;
  }
`;
