import { createGlobalStyle } from 'styled-components';
import kugelbild from './assets/Kugelbild_komplett.jpg';

export default createGlobalStyle`
:root {
  --primary: #147593; /*Blauton Hintergrund Männchen */
  --primary-light: #E6FFF2;
  --secondary: #FDE2C3;  /*Beige Hintergrund*/
  --secondary-light: #FDBF72;
  --white: #FFFFFF;
  --black: #1F0404;  /*Schrift dunkel */

  
  --ff-sans: sans-serif;
  --ff-serif: serif;
  
  --fs-200: 0.75rem;
  --fs-300: 1rem;
  --fs-400: 1.25rem;
  --fs-500: 1.375rem;
  --fs-600: 1.75rem;
  --fs-900: 2.125rem;
  --fs-950: 2.5rem; //h1 auf Startseite
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

h1, h2, h3 {
  line-height: 1.2;
}

body, h1, h2, h3, p {
  margin: 0;
}

body {
  line-height: 1.5;
  font-size: 1.25rem; /* var(--fs-400) */
}

body {
  margin: 0;
  font-family: sans-serif;
}

body, h1, h2, h3, p {
  margin: 0;
}
body {
  background: url(${kugelbild});
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
img {
  max-width: 100%;
  height: auto;
  display: block;
}
`;
