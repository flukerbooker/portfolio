import styled from 'styled-components';

export const Container = styled.header`
    height: 90vh;
    background: linear-gradient(#ade8f4, #9198e5);
`

export const Logo = styled.h2`
    display: flex;
    flex: 30%;
    justify-self: flex-start;
    font-size: 3.25rem;
`

export const NavBar = styled.nav`
    display: flex;
    padding: 4rem 10rem;
`
export const NavLink = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 70%;
    list-style: none;
`

export const NavItem = styled.li`
    color: white;
    font-size: 2rem;
    text-decoration: none;
    margin: 0 4rem;
    cursor: pointer;
`