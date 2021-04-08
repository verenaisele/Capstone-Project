import { createGlobalStyle } from 'styled-components';
import background from './assets/background_2.png';

export default createGlobalStyle`
:root {
  --primary: #147593; /*Blauton Hintergrund Männchen */
  --primary-light: #E6FFF2;
  --secondary: #FDE2C3;  /*Beige Hintergrund*/
  --secondary-light: #FDBF72;
  --white: #FFFFFF;
  --black: #1F0404;  /* dunkelbraun */

  
  --fs-200: 0.75rem;
  --fs-300: 1rem; //Fließtext Übungen
  --fs-500: 1.25rem; //Beschriftungen bodyparts
  --fs-600: 1.563rem; //h3
  --fs-900: 1.953rem; //h2 Unterüberschrift
  --fs-950: 3.052rem; //h1 auf Startseite
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1 {
  font-size: var(--fs-950);
  font-style: bold;
  line-height: 1;
  margin: 0;
}
h2 {
  font-size: var(--fs-900);
  font-style: semibold;
  line-height: 1.2;
  margin: 0;
}
h3 {
  font-size: var(--fs-600);
  font-style: semibold;
  line-height: 1.2;
  margin: 0;
}

p {
  margin: 0;
}

body {
  background-image: url(${background});
  background-repeat: no-repeat;
  height: auto;
  
  font-family: Assistant;
  font-size: 1.25rem; /* var(--fs-400) */
  line-height: 1.5;

  margin: 0 auto;
  max-width: 400px;
}


ul[class],
ol[class] {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul[class] li,
ol[class] li {
  list-style: none;
  padding: 0;
}
/* img {
  max-width: 100%;
  height: auto;
  display: block;
} */
`;
