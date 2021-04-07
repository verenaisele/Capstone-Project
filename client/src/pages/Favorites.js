import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { ReactComponent as Close } from '../assets/iconClose.svg';

export default function Favorites({ favoriteExercises, onRemoveFavorite }) {
  const { category } = useParams();

  return (
    <div>
      <Link to={'/Uebungen_Ueberblick/' + category}>
        <Close />
      </Link>
      <h1>Merkliste</h1>
      {favoriteExercises && favoriteExercises.length > 0 ? (
        <p>
          {favoriteExercises.map((favoriteExercise) => (
            <div>
              <p>{favoriteExercise.titel}</p>
              <img
                src={favoriteExercise.titelImg}
                alt="details for each exercise"
              />
              <button onClick={() => onRemoveFavorite(favoriteExercise._id)}>
                X
              </button>
            </div>
          ))}
        </p>
      ) : (
        <h2>Bislang befinden sich noch keine Übungen in der Merkliste!</h2>
      )}
    </div>
  );
}
