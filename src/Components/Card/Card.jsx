import React from "react";
import { useState, useEffect } from "react";
import Found from "../Found/Found";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Card.module.css";
import LocationComp from "../LocationComp/LocationComp";


const Card = () => {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Delhi");
  const searchBoxChangeHandler = (e) => {
    setLocation((prev) => e.target.value.toLowerCase());
    if (e.key == "Enter") {
      getData(e.target.value);
    }
  };

  async function getData(loc) {
    let api_key = "044253218f70c57471b31e819f0bf922";
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${api_key}`
    );
    let parsedData = await data.json();
    setData(parsedData);
  }
  useEffect(() => {
    getData(location);
  }, []);
  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchBox}
              placeholder="Search"
              onChange={searchBoxChangeHandler}
              onKeyUp={searchBoxChangeHandler}
            />
            <AiOutlineSearch
              className={styles.searchIcon}
              onClick={() => {
                getData(location);
              }}
            />
          </div>{data ? (data.cod == 200 ?  <Found data={data} />: "Location not found"):"Loading..."}</div>
          <LocationComp/>
      </div>
    </>
  );
};

export default Card;
