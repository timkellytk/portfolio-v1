import React from 'react';
import NavItems from '../NavItems/Navitems';
import close from '../../../assets/images/utility/exit.svg';
import style from './MobileNav.module.css';

const MobileNav = (props) => {
  let nav = null;

  if (props.show) {
    nav = (
      <div className={style.MobileNav}>
        <NavItems />
        <div className={style.Close} onClick={props.close}>
          <img src={close} alt="Close Menu" height="20px" />
        </div>
      </div>
    );
  }

  return nav;
};

export default MobileNav;
