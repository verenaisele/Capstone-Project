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
  --fs-700: 3.052rem; //h1 auf Startseite
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1 {
  font-family: Nanum Brush Script;
  font-size: 4.5rem;
  line-height: 1;
  margin: 0;
}
h2 {
  font-size: var(--fs-900);
  line-height: 1.2;
  margin: 0;
}
h3 {
  font-size: var(--fs-600);
  line-height: 1.2;
  margin: 0;
}
h4 {
  font-size: var( --fs-500);
  font-weight: 400;
  line-height: 1.2;
  margin: 0;
}
h5 {
  font-family: Nanum Brush Script;
  color: var(--black);
  font-size: var(--fs-900);
  margin: 0;
  transform: rotate(-7deg);
  margin-left: 0.5rem
}

p {
  margin: 0;
  font-size: var(--fs-300);
  line-height: 1.25;
}

body {
  background-image: url(${background});
  background-repeat: no-repeat;
  height: auto;
  
  font-family: Assistant;
 

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

`;
