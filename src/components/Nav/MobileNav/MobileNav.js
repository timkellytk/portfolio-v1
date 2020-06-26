import React from 'react';
import NavItems from '../NavItems/Navitems';
import close from '../../../assets/images/utility/exit.svg';
import style from './MobileNav.module.css';

const MobileNav = (props) => {
  let attachedClasses = [style.Load];

  if (props.show) {
    attachedClasses = [style.MobileNav, style.Open];
  } else if (props.show === false) {
    attachedClasses = [style.MobileNav, style.Closed];
  }

  return (
    <div className={attachedClasses.join(' ')}>
      <NavItems />
      <div className={style.CloseBtn} onClick={props.close}>
        <img src={close} alt="Close Menu" height="20px" />
      </div>
    </div>
  );
};

export default MobileNav;
