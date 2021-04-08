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
        <Header>
          <h2>Merkliste</h2>
          <h4>Hier werden alle Übungen gelistet, die du dir gemerkt hast.</h4>
        </Header>
        {favoriteExercises && favoriteExercises.length > 0 ? (
          <p>
            {favoriteExercises.map((favoriteExercise) => (
              <FavroriteWrapper>
                <img
                  src={favoriteExercise.titelImg}
                  alt="details for each exercise"
                />
                <section>
                  <h3>{favoriteExercise.titel}</h3>

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
          <h3>Bislang befinden sich noch keine Übungen in der Merkliste!</h3>
        )}
      </FavoriteCard>
    </>
  );
}

const FavoriteCard = styled.section`
  margin: 2rem 1rem 0rem 1rem;
`;

const Header = styled.header`
  margin-bottom: 2.5rem;
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
    grid-template: 1rem 4rem 2rem 3rem / 1.5rem 2rem 4rem 5rem 1.5rem;
    position: relative;
    right: -115px;
    top: 15px;
    width: 14rem;
  }
  h3 {
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
