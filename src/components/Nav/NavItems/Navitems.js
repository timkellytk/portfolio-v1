import React from 'react';
import style from './NavItems.module.css';

const NavItems = () => {
  return (
    <div className={style.NavMenu}>
      <p className={style.NavLink}>HOME</p>
      <p className={style.NavLink}>PORTFOLIO</p>
      <p className={style.NavLink}>CONTACT</p>
    </div>
  );
};

export default NavItems;
