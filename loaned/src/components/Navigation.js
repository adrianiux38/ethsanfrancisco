import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const tabs = [
  {
    route: "/borrow",
    icon: faHome,
    label: "Borrow",
  },
  {
    route: "/repay",
    icon: faUserCircle,
    label: "Repay",
  },
];

export const Navigation = (props) => {
  return (
    <div>
      <nav
        id="myNavBar"
        className="myNavBar fixed-bottom navbar-light bottom-tab-nav"
        role="navigation"
      >
        <Nav id="myNavBar" className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link bottom-nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon} />
                    <div className="bottom-tab-label">{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>

      {/* Bottom Tab Navigator*/}
      <nav
        id="myNavBar"
        className="navbar fixed-bottom navbar-light"
        role="navigation"
      >
        <Nav id="myNavBar" className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem key={`tab-${index}`}>
                <NavLink
                  to={tab.route}
                  className="nav-link"
                  activeClassName="active"
                >
                  <div className="row d-flex flex-column justify-content-center align-items-center">
                    <FontAwesomeIcon size="lg" icon={tab.icon} />
                    <div>{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
    </div>
  );
};
