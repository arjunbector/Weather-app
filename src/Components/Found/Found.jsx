import React from "react";
import styles from "./Found.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Found = ({ data }) => {
  return (
    <>
      <div className={styles.locationName}>
        {data ? data.name : "Loading..."}
      </div>
      <div className={styles.weatherDetails}>
        <p className={styles.temp}>
          {data ? (data.main.temp - 273).toFixed(2) + " °C" : "Loading"}
        </p>
        <p className={styles.mainWeather}>
          {data ? data.weather[0].main : "Loading"}
          <img
            src={`https://openweathermap.org/img/wn/${
              data ? data.weather[0].icon : "Loading..."
            }.png`}
            alt="weather"
          />
        </p>
        <div className={styles.secDetails}>
          <p>Humidity: {data ? data.main.humidity : "Loading"} %</p>
          <p>Wind Speed: {data ? data.wind.speed : "Loading"} km/h</p>
          {/* <p>api key = {process.env.REACT_APP_API_KEY}</p> */}
        </div>
      </div>
    </>
  );
};

export default Found;
