import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './NavItems.module.css';

const NavItems = (props) => {
  return (
    <div className={style.NavMenu}>
      <NavLink to="/about" onClick={props.clicked}>
        <p className={style.NavLink}>ABOUT</p>
      </NavLink>
      <NavLink to="/portfolio" onClick={props.clicked}>
        <p className={style.NavLink}>PORTFOLIO</p>
      </NavLink>
      <NavLink to="/contact" onClick={props.clicked}>
        <p className={style.NavLink}>CONTACT</p>
      </NavLink>
    </div>
  );
};

NavItems.propTypes = {
  clicked: PropTypes.func,
};

export default NavItems;
