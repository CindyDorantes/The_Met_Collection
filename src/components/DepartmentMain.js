import React from 'react';
import styles from './styles/DepartmentMain.module.css';
import collage from './assets/the-met-collage.png';

const DepartmentMain = () => (
  <div className={styles.mainContainer}>
    <p className={styles.welcome}>
      Welcome to The Met
    </p>
    <div className={styles.imgContainer}>
      <img src={collage} alt="the met cover" />
    </div>
  </div>
);

export default DepartmentMain;
