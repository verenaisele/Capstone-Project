import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as Close } from '../assets/iconClose.svg';

export default function Favorites({ favorites }) {
  const { category } = useParams();

  console.log(favorites);
  return (
    <div>
      <Link to={'/Uebungen_Ueberblick/' + category}>
        <Close />
      </Link>
      <h1>Merkliste</h1>
      {favorites.length > 0 ? (
        <p>
          {favorites.map((favoriteExercise) => (
            <div>
              <p>{favoriteExercise.titel}</p>
              <img
                src={favoriteExercise.titelImg}
                alt="details for each exercise"
              />
            </div>
          ))}
        </p>
      ) : (
        <h2>Bislang befinden sich noch keine Übungen in der Merkliste!</h2>
      )}
    </div>
  );
}
