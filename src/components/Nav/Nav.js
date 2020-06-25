import React from 'react';
import NavItems from './NavItems/Navitems';
import HamburgerMenu from './MobileNav/HamburgerMenu/HamburgerMenu';
import style from './Nav.module.css';

const Nav = (props) => {
  return (
    <React.Fragment>
      <header className={style.Nav}>
        <p className={style.Logo}>TIM KELLY</p>
        <nav className={style.DesktopOnly}>
          <NavItems />
        </nav>
        <HamburgerMenu clicked={props.open} />
      </header>
      <div className={style.NavPadding} />
    </React.Fragment>
  );
};

export default Nav;
