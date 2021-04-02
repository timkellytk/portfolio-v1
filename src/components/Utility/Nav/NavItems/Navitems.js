import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './NavItems.module.css';

const NavItems = (props) => {
  return (
    <div className={style.NavMenu}>
      <NavLink to="/about" onClick={props.clicked}>
        <p className={style.NavLink}>About</p>
      </NavLink>
      <NavLink to="/portfolio" onClick={props.clicked}>
        <p className={style.NavLink}>Portfolio</p>
      </NavLink>
      <NavLink to="/contact" onClick={props.clicked}>
        <p className={style.NavLink}>Contact</p>
      </NavLink>
    </div>
  );
};

NavItems.propTypes = {
  clicked: PropTypes.func,
};

export default NavItems;
