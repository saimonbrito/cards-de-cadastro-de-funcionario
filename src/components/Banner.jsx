 import React from 'react';
import styles from '../components/Banner.module.css';
 
 
 export function Banner() {
  return (
    <div className={styles.banner}>
     <h1>
        <img src="./banner.jpg" alt=""  />
     </h1>
    </div>
  );
}