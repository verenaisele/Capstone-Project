import { ReactComponent as BodyParts_overview } from '../assets/Bodypart_overview.svg';
import { ReactComponent as Mark } from '../assets/Mark.svg';

export default function BodyParts() {
  return (
    <div>
      <h1>Wähle...</h1>
      <p>
        welchem Bereich deines Körpers möchtest du dich heute besonders widmen?
      </p>
      <BodyParts_overview />
      <div>
        <Mark />
        <p>Augen</p>
      </div>
    </div>
  );
}
