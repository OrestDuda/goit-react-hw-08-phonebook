import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import authSelectors from "../../Redux/Authentification/auth-selectors";
import styles from "./Navigation.module.css";

const Navigation = ({ isLoggedIn }) => (
  <nav>
    <NavLink to="/" exact className={styles.nav_link}>
      Home
    </NavLink>

    {isLoggedIn && (
      <NavLink to="/contacts" className={styles.nav_link}>
        Contacts
      </NavLink>
    )}
  </nav>
);
const mapStateToProps = (state) => ({
  isLoggedIn: authSelectors.getIsLoggedIn(state),
});

export default connect(mapStateToProps)(Navigation);
