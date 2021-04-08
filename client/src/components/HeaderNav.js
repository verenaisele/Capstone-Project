import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Ohmpage } from '../assets/navyoga.svg';
import { ReactComponent as Bodyparts } from '../assets/navBodyparts.svg';
import { ReactComponent as Favorites } from '../assets/like.svg';

export default function HeaderNav() {
  return (
    <Header>
      <NavWrapper className="navigation">
        <LINK activeClassName="active" className="link" exact to="/">
          <OhmIcon />
        </LINK>
        <LINK activeClassName="active" className="link" to="/Bodyparts">
          <Bodyparts />
        </LINK>
        <LINK activeClassName="active" className="link" to="/Favorites">
          <Favorites />
        </LINK>
      </NavWrapper>
    </Header>
  );
}

const LINK = styled(NavLink)`
  cursor: pointer;
  background-color: transparent;
  background-image: none;
  margin-left: 5px;
  margin-right: 5px;
  padding: 5px;
`;
const OhmIcon = styled(Ohmpage)`
  //margin: 2rem;
`;

const Header = styled.header`
  background-color: transparent;
  background-image: none;
`;

const NavWrapper = styled.nav`
  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link {
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }

  .link:hover {
    background: hotpink;
    width: 30px;
    height: 30px;
  }

  .active {
    background: var(--secondary-light);
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }
`;
