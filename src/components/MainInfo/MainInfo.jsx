import React from "react";
import styles from "./MainInfo.module.css";

import sunny from "../../img/sunny_icon.png";

const MainInfo = () => {
    return (
        <div className={styles.mainInfo}>
            <div className={styles.degrees}>26°</div>
            <div className={styles.city_time}>
                <div className={styles.city}>London</div>
                <div className={styles.time}>10:36 - Tuesday, 22 Oct '19</div>
            </div>
            <div className={styles.icon_total}>
                <div className={styles.iconC}>
                    <img className={styles.icon} src={sunny}></img>
                </div>
                <div className={styles.total}>Sunny</div>
            </div>
        </div>
    );
};

export default MainInfo;
