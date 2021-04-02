import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import NavItems from './NavItems/Navitems';
import HamburgerMenu from './MobileNav/HamburgerMenu/HamburgerMenu';
import logo from '../../../assets/images/utility/tk-logo.png';
import style from './Nav.module.css';

const Nav = (props) => {
  return (
    <React.Fragment>
      <header className={style.Nav}>
        <Link to="/">
          <div></div>
          <img src={logo} alt="Tim Kelly logo" className={style.Logo} />
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
