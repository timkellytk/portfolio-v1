import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavItems from './NavItems/Navitems';
import HamburgerMenu from './MobileNav/HamburgerMenu/HamburgerMenu';
import style from './Nav.module.css';

const Nav = (props) => {
  return (
    <React.Fragment>
      <header className={style.Nav}>
        <Link to="/">
          <p className={style.Logo}>TIM KELLY</p>
        </Link>
        <nav className={style.DesktopOnly}>
          <NavItems />
        </nav>
        <HamburgerMenu clicked={props.open} />
      </header>
      <div className={style.NavMargin} />
    </React.Fragment>
  );
};

Nav.propTypes = {
  open: PropTypes.func.isRequired,
};

export default Nav;
