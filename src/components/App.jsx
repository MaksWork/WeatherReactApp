import React from "react";
import styles from "./App.module.css";

import search from "..\\img\\icons8-search-30.png";

const App = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainInfo}>
                <div className={styles.degrees}>26°</div>
                <div className={styles.city_time}>
                    <div className={styles.city}>London</div>
                    <div className={styles.time}>
                        10:36 - Tuesday, 22 Oct '19
                    </div>
                </div>
                <div className={styles.icon_total}>
                    <div className={styles.icon}></div>
                    <div className={styles.total}></div>
                </div>
            </div>
            <div className={styles.rightPanel}>
                <div className={styles.locationSearch}>
                    <div className={styles.searchC}>
                        <input className={styles.searchI} placeholder='Another location' type="text"></input>
                        <button className={styles.searchB}><img className={styles.searchB_icon} alt="search" src={search}></img></button>
                    </div>
                    <div className={styles.recomend}>
                        <button className={styles.rec_city}>New York</button>
                        <button className={styles.rec_city}>Riga</button>
                        <button className={styles.rec_city}>Daugavpils</button>
                        <button className={styles.rec_city}>Liepaja</button>
                    </div>
                    <p>_______________________________________________</p>
                </div>
                <div className={styles.details}>
                    <p className={styles.d_title}>Weather details</p>
                    <div className={styles.d_table}>
                        <div className={`${styles.d_left} ${styles.d_column}`}>
                            <p>Cloudy</p>
                            <p>Humidity</p>
                            <p>Wind</p>
                            <p>Rain</p>
                        </div>
                        <div className={`${styles.d_right} ${styles.d_column}`}>
                            <p className={styles.d_r_content}>12%</p>
                            <p className={styles.d_r_content}>78%</p>
                            <p className={styles.d_r_content}>1km/h</p>
                            <p className={styles.d_r_content}>0mm</p>
                        </div>
                    </div>
                </div>
                <p>_______________________________________________</p>
            </div>
        </div>
    );
};

export default App;
