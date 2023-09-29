import React, { useEffect, useState } from "react";
import axios from "axios";

const API_endpoint = `http://api.openweathermap.org/geo/1.0/reverse?`;
const API_key = `8e929175d0d7784d5aeb1f86be95098e`;

const LocationComp = () => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);

      console.log(longitude, latitude);
    });

    axios
      .get(
       `${API_endpoint}lat=${latitude}&lon=${longitude}&limit=5&appid=${API_key}`
      )
      .then((response) => {
        console.log(response.data[0].name);
      });

  }, []);

  return <div></div>;
};

export default LocationComp;
