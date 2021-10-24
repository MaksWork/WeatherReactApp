import React from "react";
import styles from "./LocationSearch.module.css";
import { useState } from "react";
import $ from "jquery";

import searchImg from "../../img/icons8-search-30.png";

const LocationSearch = (props) => {
    const [location, setLocation] = useState();
    
    const locationChange = (e) => {
        $("input").removeClass(`${styles.searchIError}`);
        setLocation(e.target.value);
    };
    
    const handleLocationPush = () =>{ 
        if(!location || /^\s*$/.test(location)){
            errorTyping();
        }
        else{
            props.search(location);
        }
    }
    
    const errorTyping = () =>{
        $("input").addClass(`${styles.searchIError}`);
    }
    

    return (
        <div className={styles.locationSearch}>
            <div className={styles.searchC}>
                <input
                    className={styles.searchI}
                    placeholder='Another location'
                    type='text'
                    onChange={locationChange}></input>
                <button className={styles.searchB} onClick={handleLocationPush}>
                    <img
                        className={styles.searchB_icon}
                        alt='search'
                        src={searchImg}></img>
                </button>
            </div>
            <div className={styles.recomend}>
                <button className={styles.rec_city}>New York</button>
                <button className={styles.rec_city}>Gamburg</button>
                <button className={styles.rec_city}>Los Angeles</button>
                <button className={styles.rec_city}>Taiwan</button>
            </div>
        </div>
    );
};

export default LocationSearch;
