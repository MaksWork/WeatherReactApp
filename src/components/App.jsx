import React from "react";
import styles from "./App.module.css";
import { useState } from "react";

import MainInfo from "./MainInfo/MainInfo.jsx";
import RightPanel from "./RightPanel/RightPanel";

let API_LINK = "https://api.openweathermap.org";
let API_KEY = "4e3a357e39faa90364b69e4355896012";

let TEST_URL = `${API_LINK}/data/2.5/weather?q=London&appid=${API_KEY}&units=metric`;

const App = () => {
    const [temp, setTemp] = useState();
    const [main, setMain] = useState();


    const weather_data = async () => { 
        try {
            let res_data;
            const res = await fetch(`${TEST_URL}`)
            .then(response => response.json())
            .then(data => {
                setTemp(data.main.temp.toFixed());
                setMain(data.weather[0].main);
            })
        } catch (e) {
            console.log(e);
        }
    };
    weather_data();
    

    return (
        <div className={styles.mainContainer}>
            <MainInfo temp={temp} main={main}/>
            <RightPanel />
        </div>
    );
};

export default App;
