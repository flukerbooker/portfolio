import React from 'react';
import { NavBar, Container, NavItem, NavLink, Logo } from './styles/header';

export default function Header({children, ...restProps}){
    return <Container {...restProps}>{children}</Container>
};

Header.Logo = function HeaderLogo({children, ...restProps}){
    return <Logo {...restProps}>{children}</Logo>
}

Header.NavBar = function HeaderNavBar({children, ...restProps}){
    return <NavBar {...restProps}>{children}</NavBar>
}

Header.NavItem = function HeaderNavItem({children, ...restProps}){
    return <NavItem {...restProps}>{children}</NavItem>
}

Header.NavLink = function HeaderNavLink({children, ...restProps}){
    return <NavLink {...restProps}>{children}</NavLink>
}
