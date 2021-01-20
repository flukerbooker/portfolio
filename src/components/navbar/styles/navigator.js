import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 114rem;
  padding: 1.5rem 0;
  margin: 0 auto;
`;

export const NavBar = styled.nav`
  color: #014f86;
  padding: 2rem 0rem;
  
`;

export const Logo = styled.img`
  width: 12rem;
  height: 12rem;
`;

export const NavLink = styled.ul`
  list-style: none;
`;

export const NavItem = styled.li`
  display: inline-block;
  color: #014f86;
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 3rem;
  cursor: pointer;
`;
