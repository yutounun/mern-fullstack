import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import SideDrawer from "./SideDrawer";

const MainNavigation = () => {
  return (
    <>
      <SideDrawer>
        <NavLinks />
      </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
