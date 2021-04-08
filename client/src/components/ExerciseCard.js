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

  return (
    <main>
      <Header>
        <h1>Übung</h1>
        <Link to={'/Uebungen_Ueberblick/' + category}>
          <Previous />
        </Link>
        {foundExercise && <h2>{foundExercise.titel}</h2>}
      </Header>

      {foundExercise &&
        foundExercise.imageURL.map((img, index) => {
          return (
            <CardText>
              <img src={img} alt="details for each exercise" />
              <li>{foundExercise.description[index]}</li>
            </CardText>
          );
        })}
    </main>
  );
}

const Header = styled.section`
  margin: 1rem 1rem 3rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const CardText = styled.div`
  display: flex;
  margin: 2rem 0rem 0rem 0rem;
  color: var(--white);

  img {
    margin: 0;
    position: relative;
  }
  li {
    position: absolute;
    z-index: 40;
    margin: 2rem 2rem 2rem 11rem;
    list-style: none;
    padding: 0;
    font-size: var(--fs-300);
  }
`;
