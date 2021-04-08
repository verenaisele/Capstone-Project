import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HeaderNav from '../components/HeaderNav';
import { ReactComponent as Remove } from '../assets/remove.svg';
import { ReactComponent as Enter } from '../assets/enter.svg';

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
                  <h2>{favoriteExercise.titel}</h2>

                  <Link
                    to={
                      '/Uebungen_Ueberblick/' +
                      category +
                      '/' +
                      favoriteExercise._id
                    }
                  >
                    <EnterIcon />
                  </Link>

                  <RemoveIcon
                    onClick={() => onRemoveFavorite(favoriteExercise._id)}
                  />
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

  img {
    position: absolute;
    z-index: 40;
  }

  section {
    background: var(--black);
    border-radius: 1rem;
    display: grid;
    grid-template: 1rem 4rem 2rem 3.5rem / 2rem 2rem 4rem 5rem 1rem;
    position: relative;
    right: -115px;
    top: 20px;
    width: 14rem;
  }
  h2 {
    color: var(--white);
    grid-row: 2;
    grid-column: 2 / -1;
  }

  a {
    grid-row: 4;
    grid-column: 3;
  }
`;

const RemoveIcon = styled(Remove)`
  fill: var(--white);
  grid-row: 4;
  grid-column: 4;
`;
const EnterIcon = styled(Enter)`
  fill: var(--white);
`;
