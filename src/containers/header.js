import React from 'react';
import { Header } from '../components/';

export function HeaderContainer(){
    return(
        <Header>
            <Header.NavBar>
                <Header.Logo>FRK</Header.Logo>
                <Header.NavLink>
                    <Header.NavItem href="#">About</Header.NavItem>
                    <Header.NavItem href="#">Project</Header.NavItem>
                    <Header.NavItem href="#">Contact</Header.NavItem>
                </Header.NavLink>
            </Header.NavBar>
        </Header>
    );
};