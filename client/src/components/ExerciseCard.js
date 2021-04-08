import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Previous } from '../assets/previous.svg';

export default function ExerciseCard({ exercises }) {
  const { id } = useParams();
  const { category } = useParams();

  const foundExercise = exercises.find((exercise) => {
    return exercise._id === id;
  });

  console.log(exercises);

  /*  const foundDescription = foundExercise.description.find((item) => {
    return item === item.length;
  });
  console.log(foundDescription); */

  return (
    <Card>
      <div>
        <h1>Übung</h1>
        <Link to={'/Uebungen_Ueberblick/' + category}>
          <Previous />
        </Link>
      </div>

      <h2>{foundExercise.titel}</h2>

      {/*  Mapping über Text aus Array..
      {foundExercise.description.map((description) => {
        return <p>description</p>;
      })} */}
      {/*     <p>{foundDescription}</p> */}

      {foundExercise.imageURL.map((img) => {
        return <ImgCard src={img} alt="details for each exercise" />;
      })}
    </Card>
  );
}

const ImgCard = styled.img`
  display: block;
  width: 25rem;
  margin: 0 auto;
`;
const Card = styled.section`
  /*  margin: 2rem 1rem 3rem 1rem; */

  div {
    display: flex;
    justify-content: space-between;
    margin: 2rem 1rem 0.5rem 1.5rem;
  }
  h2 {
    margin: 0rem 3rem 1rem 1.5rem;
  }
`;
