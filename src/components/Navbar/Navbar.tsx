import React from "react";
import { NavLink } from "react-router-dom";
import { ROUTE } from "../../constants/Routes";
import Container from "../Container/Container";
import style from "./navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <nav className={style.nav}>
      <Container>
        <div className={style.navbarContainer}>
          <div className={style.nav__logo}>
            <h4>JobsNow</h4>
          </div>
          <ul className={style.nav__items}>
            <li>
              <NavLink
                className={({ isActive }): string =>
                  isActive ? style.active : ""
                }
                to={ROUTE.HOME}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTE.SEARCH}
                className={({ isActive }): string =>
                  isActive ? style.active : ""
                }
                end
              >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTE.BASE}
                className={({ isActive }): string =>
                  isActive ? style.active : ""
                }
                end
              >
                History
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
