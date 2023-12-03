import { useState, useEffect } from "react";
import Found from "../Found/Found";
import { AiOutlineSearch } from "react-icons/ai";
import styles from "./Card.module.css";
import axios from "axios";
import CustomButton from "../CustomButton/CustomButton";

const Card = () => {
  const API_endpoint = `https://api.openweathermap.org/geo/1.0/reverse?`;
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Delhi");
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    document.body.style.background = `url("https://source.unsplash.com/1600x900/?clouds")`;
  }, []);



  const getData = (loc) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${
        import.meta.env.VITE_API_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  useEffect(() => {
    getData(location);
  }, []);

  const searchBoxChangeHandler = (e) => {
    setInputValue(e.target.value);
    setLocation(e.target.value.toLowerCase());
    if (e.key == "Enter") {
      getData(e.target.value);
    }
  };
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      getLocation();
    });
  }, [latitude, longitude]);

  async function getLocation() {
    let loc;
    await axios
      .get(
        `${API_endpoint}lat=${latitude}&lon=${longitude}&limit=5&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((response) => {
        getData(response.data[0].name);
      });
    return loc;
  }

  return (
    <>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.search}>
            <input
              type="text"
              className={styles.searchBox}
              placeholder="Search"
              value={inputValue}
              onChange={searchBoxChangeHandler}
              onKeyUp={searchBoxChangeHandler}
            />
            <AiOutlineSearch
              className={styles.searchIcon}
              onClick={() => {
                getData(location);
                console.log(data.weather[0].main);
              }}
            />
          </div>
          {data ? (
            data.cod == 200 ? (
              <Found
                data={data}
                getLocation={getLocation}
                setInputValue={setInputValue}
              />
            ) : (
              "Location not found"
            )
          ) : (
            "Loading..."
          )}
        </div>
        <CustomButton getLocation={getLocation} setInputValue={setInputValue} />
      </div>
    </>
  );
};

export { Card };
