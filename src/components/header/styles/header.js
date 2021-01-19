import styled from 'styled-components';

export const Container = styled.header`
    height: 100vh;
`

export const NavBar = styled.nav`
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    height: 4rem;
`
export const NavLink = styled.ul`
    display: flex;
    list-style: none;
`

export const NavItem = styled.li`
    color: black;
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: 2rem;
    text-decoration: none;
`