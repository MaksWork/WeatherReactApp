import React from "react";
import styles from "./MainInfo.module.css";
import { useState, useEffect } from "react";

import get_date_time from "../../logic/methods";

import sunny from "../../img/sunny_icon.png";

let MINUTE_MS = 1000;

const MainInfo = (props) => {
    const [date_time, set_date_time] = useState(get_date_time());
    
    useEffect(() => {
        const interval = setInterval(() => {  
          set_date_time(get_date_time());
        }, MINUTE_MS);
      
        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
      }, [])

    return (
        <div className={styles.mainInfo}>
            <div className={styles.degrees}>{`${props.temp}°`}</div>
            <div className={styles.city_time}>
                <div className={styles.city}>London</div>
                <div className={styles.time}>{`${date_time}`}</div>
            </div>
            <div className={styles.icon_total}>
                <div className={styles.iconC}>
                    <img className={styles.icon} src={sunny}></img>
                </div>
                <div className={styles.total}>{props.main}</div>
            </div>
        </div>
    );
};

export default MainInfo;
