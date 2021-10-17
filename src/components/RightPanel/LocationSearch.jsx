import React from "react";
import styles from "./LocationSearch.module.css";

import search from "../../img/icons8-search-30.png";

const LocationSearch = () => {
    return (
        <div className={styles.locationSearch}>
            <div className={styles.searchC}>
                <input
                    className={styles.searchI}
                    placeholder='Another location'
                    type='text'></input>
                <button className={styles.searchB}>
                    <img
                        className={styles.searchB_icon}
                        alt='search'
                        src={search}></img>
                </button>
            </div>
            <div className={styles.recomend}>
                <button className={styles.rec_city}>New York</button>
                <button className={styles.rec_city}>Riga</button>
                <button className={styles.rec_city}>Daugavpils</button>
                <button className={styles.rec_city}>Liepaja</button>
            </div>
        </div>
    );
};

export default LocationSearch;
