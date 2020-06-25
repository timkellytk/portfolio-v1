import React from 'react';
import ContentContainer from '../Utility/ContentContainer/ContentContainer';
import Animate from '../Utility/Animate/Animate';
import style from './Nav.module.css';

const Nav = (props) => {
  return (
    <React.Fragment>
      <ContentContainer>
        <div className={style.Nav}>
          <Animate delayTitle>
            <p className={style.White}>TIM KELLY</p>
          </Animate>
          <Animate delayTitle>
            <div className={style.NavMenu}>
              <p className={style.NavLink}>HOME</p>
              <p className={style.NavLink}>PORTFOLIO</p>
              <p className={style.NavLink}>CONTACT</p>
            </div>
          </Animate>
        </div>
        <div className={style.NavPadding} />
      </ContentContainer>
    </React.Fragment>
  );
};

export default Nav;
