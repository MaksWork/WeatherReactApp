import React from "react";
import styles from "./App.module.css";
import { useState, useRef } from "react";

import MainInfo from "./MainInfo/MainInfo.jsx";
import RightPanel from "./RightPanel/RightPanel";   

let API_LINK = "https://api.openweathermap.org";
let API_KEY = "4e3a357e39faa90364b69e4355896012";

const App = () => {
    const [country, setCountry] = useState("London");
    
    //Main info
    const [temp, setTemp] = useState(0);
    const [main, setMain] = useState();
    //Details
    const [cloudy, setCloudy] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [wind, setWind] = useState(0);
    const [pressure, setPressure] = useState(0);
    
    const callbackSearchCountry = (country) =>{
        const formatedCountry = country.charAt(0).toUpperCase() + country.slice(1);
        setCountry(formatedCountry);
    }
    
    const weather_data = async () => { 
        try {
            const res = await fetch(`${API_LINK}/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setTemp(data.main.temp.toFixed());
                setMain(data.weather[0].main);

                setCloudy(data.clouds.all)
                setHumidity(data.main.humidity);
                setWind(data.wind.speed)
                setPressure(data.main.pressure)
            })
        } catch (e) {
            alert("Unknown country or city")
            setCountry("London");
        }
    };
    weather_data();

    return (
        <div className={styles.mainContainer}>
            <MainInfo temp={temp} main={main} country={country}/>
            <RightPanel search={callbackSearchCountry} cloudy={`${cloudy}%`} humidity={`${humidity}%`} wind={`${wind}m/s`} pressure={`${pressure}hPa`}/>
        </div>
    );
};

export default App;
