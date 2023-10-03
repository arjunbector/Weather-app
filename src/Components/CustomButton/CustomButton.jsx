import React from 'react'
import styles from './CustomButton.module.css';

const CustomButton = ({getLocation, setInputValue}) => {
  return (
    <button className={styles.btn} onClick={()=>{
      getLocation();
      setInputValue("")
    }}>
      Current Location
    </button>
  )
}

export default CustomButton
