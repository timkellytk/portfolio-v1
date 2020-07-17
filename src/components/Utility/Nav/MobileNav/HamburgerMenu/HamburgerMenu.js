import React from 'react';
import PropTypes from 'prop-types';
import hamburger from '../../../../../assets/images/utility/menu.svg';
import style from './HamburgerMenu.module.css';

const HamburgerMenu = (props) => {
  return (
    <div className={style.Menu} onClick={props.clicked}>
      <img src={hamburger} alt="menu" height="20px" />
    </div>
  );
};

HamburgerMenu.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default HamburgerMenu;
