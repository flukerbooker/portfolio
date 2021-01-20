import styled from "styled-components";

export const Container = styled.header`
  height: 100vh;
  max-width: 114rem;
  background-size: cover;
  margin: 0 auto;
`;

export const Logo = styled.h2`
  display: flex;
  justify-self: flex-start; 
  font-size: 3.5rem;
`;

export const NavBar = styled.nav`
  color: #014f86;
  display: flex;
  padding: 4rem 5rem;
`;
export const NavLink = styled.ul`
  color: white;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`;

export const NavItem = styled.li`
  color: #014f86;
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0 3rem;
  cursor: pointer;
`;
