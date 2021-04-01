import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Close } from '../assets/iconClose.svg';

export default function ExerciseCard({ exercises }) {
  const { id } = useParams();
  const { category } = useParams();

  const foundExercise = exercises.find((exercise) => {
    return exercise._id === id;
  });

  return (
    <div>
      <Link to={'/Uebungen_Ueberblick/' + category}>
        <Close />
      </Link>
      <h1>Exercise CARD</h1>
      <p>{foundExercise.titel}</p>
      <p>{foundExercise.description}</p>
      {foundExercise.imageURL.map((img) => {
        return <ImgCard src={img} alt="details for each exercise" />;
      })}
    </div>
  );
}

const ImgCard = styled.img`
  width: 25rem;
  margin: 0 auto;
`;
