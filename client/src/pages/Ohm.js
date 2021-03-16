import React from 'react';
import Timer from '../components/Timer';

export default function Ohm() {
  return (
    <div>
      <h1>Willkommen</h1>
      <p>Nimm dir 60 Sekunden Zeit.</p>
      <p>Frag dich: Wie geht es mir?</p>
      <p>Bereit?</p>
      <button>START</button>
      <Timer />
    </div>
  );
}
