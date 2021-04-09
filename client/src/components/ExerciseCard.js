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
        <h2>Übung</h2>
        <Link to={'/Uebungen_Ueberblick/' + category}>
          <Previous />
        </Link>
        {foundExercise && <h3>{foundExercise.titel}</h3>}
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

  display: grid;
  grid-template: 2.5rem 2rem / 10rem 9rem 2rem;

  a {
    margin: 0 0 1rem auto;
    grid-column: 3;
    grid-row: 1;
  }

  h2 {
    margin-right: 3rem;
    font-weight: 600;
  }
  h3 {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`;

const CardText = styled.div`
  display: flex;
  margin: 2rem 0rem 0rem 0rem;
  color: var(--white);

  img {
    margin: 0;
    padding: 0;
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
