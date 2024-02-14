import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 500px;
  background-color: white;
  border-radius: 4px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  gap: 40px;
  font-size: 18px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  /* Add hover and active states if needed */
`;

function Navbar() {
  return (
    <StyledNav>
      <StyledUl>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
      </StyledUl>
    </StyledNav>
  );
}

export default Navbar;
