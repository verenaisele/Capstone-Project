import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Ohmpage } from '../assets/navyoga.svg';
import { ReactComponent as Bodyparts } from '../assets/navBodyparts.svg';
import { ReactComponent as Favorites } from '../assets/like.svg';

export default function HeaderNav() {
  return (
    <Header>
      <NavWrapper>
        <NavLink activeClassName="active" className="link" exact to="/">
          <OhmIcon />
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/Bodyparts">
          <Bodyparts />
        </NavLink>
        <NavLink activeClassName="active" className="link" to="/Favorites">
          <Favorites />
        </NavLink>
      </NavWrapper>
    </Header>
  );
}

const OhmIcon = styled(Ohmpage)`
  //margin: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  background-image: none;
  margin-top: 1rem;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  .link {
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }

  .link:hover {
    & svg {
      transform: scale(1.25);
      background: var(--secondary-light);
    }
  }

  .active {
    background: var(--secondary-light);
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }
`;
