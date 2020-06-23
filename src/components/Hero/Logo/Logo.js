import React from 'react';
import styles from './Logo.module.css';
import Animate from '../../Utility/Animate/Animate';

const Logo = () => {
  return (
    <Animate>
      <div className={styles.Logo}>TIM KELLY</div>
    </Animate>
  );
};

export default Logo;
