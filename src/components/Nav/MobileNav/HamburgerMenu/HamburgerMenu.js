import React from 'react';
import hamburger from '../../../../assets/images/utility/menu.svg';
import style from './HamburgerMenu.module.css';

const HamburgerMenu = (props) => {
  return (
    <div className={style.Menu} onClick={props.clicked}>
      <img src={hamburger} alt="menu" height="20px" />
    </div>
  );
};

export default HamburgerMenu;
