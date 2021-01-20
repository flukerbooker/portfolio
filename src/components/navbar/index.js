import React from 'react';
import { NavBar, NavContainer, NavItem, NavLink, Logo } from './styles/navigator';

export default function Navigator({children, ...restProps}){
    return <NavContainer {...restProps}>{children}</NavContainer>
};

Navigator.Logo = function NavigatorLogo({children, ...restProps}){
    return <Logo {...restProps}>{children}</Logo>
}

Navigator.NavBar = function NavigatorNavBar({children, ...restProps}){
    return <NavBar {...restProps}>{children}</NavBar>
}

Navigator.NavItem = function NavigatorNavItem({children, ...restProps}){
    return <NavItem {...restProps}>{children}</NavItem>
}

Navigator.NavLink = function NavigatorNavLink({children, ...restProps}){
    return <NavLink {...restProps}>{children}</NavLink>
}
