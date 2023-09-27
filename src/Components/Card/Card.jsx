import React from "react";
import { useState, useEffect } from "react";
import styles from "./Card.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Card = ({ location }) => {
  const [data, setData] = useState(null);
  async function getData() {
    // let location = "Vellore".toLowerCase();
    let api_key = "044253218f70c57471b31e819f0bf922";
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api_key}`
    );
    let parsedData = await data.json();
    console.log(parsedData);
    setData(parsedData);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {/* <p>{data ? data.name : "Loading..."}</p>
      <p>{data ? data.main.temp : "Loading..."}</p>
      <p>{data ? data.weather[0].main : "Loading..."}</p>
      <p>{data ? data.wind.speed : "Loading..."}</p> */}
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchBox}
              placeholder="Search"
            />
            <AiOutlineSearch className={styles.searchIcon} />
          </div>

          <div className={styles.locationName}>
            {data ? data.name : "Loading..."}
          </div>
          <div className={styles.weatherDetails}>
            <p>Temperature: {data ? (data.main.temp - 273).toFixed(2) + " °C" : "Loading"}</p>
            <p>Humidity: {data ? data.main.humidity : "Loading"} %</p>
            <p>Wind Speed: {data ? data.wind.speed : "Loading"} km/h</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
