import React from "react";
import { Navigator } from "../components/";
import LogoSrc from "../assets/icon.png";

export function HeaderContainer() {
  return (
    <Navigator>
      <Navigator.Logo src={LogoSrc} />
      <Navigator.NavBar>
        <Navigator.NavLink>
          <Navigator.NavItem href="#">Home</Navigator.NavItem>
          <Navigator.NavItem href="#">About</Navigator.NavItem>
          <Navigator.NavItem href="#">Project</Navigator.NavItem>
          <Navigator.NavItem href="#">Contact</Navigator.NavItem>
        </Navigator.NavLink>
      </Navigator.NavBar>
    </Navigator>
  );
}
