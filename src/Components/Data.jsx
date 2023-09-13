import { useState, useEffect } from "react";

export const Data = () => {
    const [data, setData] = useState(null);
    async function getData (){
        let api_key = "044253218f70c57471b31e819f0bf922";
        let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=ludhiana&appid=${api_key}`);
        let parsedData = await data.json();
        console.log(parsedData);
        setData(parsedData);
    }
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <p>{data? data.main.temp : "Loading..."}</p>
        <p>{data? data.weather[0].main : "Loading..."}</p>
        <p>{data? data.wind.speed : "Loading..."}</p>
    </div>
  )
}
