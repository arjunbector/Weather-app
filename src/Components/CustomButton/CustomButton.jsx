import React from 'react'
import styles from './CustomButton.module.css';

const CustomButton = ({getLocation}) => {
  return (
    <button className={styles.btn} onClick={getLocation}>
      Current Location
    </button>
  )
}

export default CustomButton
