import React from "react";
import styles from "./LocationSearch.module.css";
import { useState } from "react";
import $ from "jquery";

import searchImg from "../../img/icons8-search-30.png";

const citys = ["New York", "Gamburg", "Taiwan", "Latvia"]

const LocationSearch = (props) => {
    const [location, setLocation] = useState();
    
    const locationChange = (e) => {
        $("input").removeClass(`${styles.searchIError}`);
        setLocation(e.target.value);
    };
    
    const handleLocationPush = (loc) =>{ 
        if(!loc || /^\s*$/.test(loc)){
            errorTyping();
        }
        else{
            props.search(loc);
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
                <button className={styles.searchB} onClick={() => handleLocationPush(location)}>
                    <img
                        className={styles.searchB_icon}
                        alt='search'
                        src={searchImg}></img>  
                </button>
            </div>
            <div className={styles.recomend}>
                <button onClick={() => handleLocationPush(citys[0])} className={styles.rec_city}>{citys[0]}</button>
                <button onClick={() => handleLocationPush(citys[1])} className={styles.rec_city}>{citys[1]}</button>
                <button onClick={() => handleLocationPush(citys[2])} className={styles.rec_city}>{citys[2]}</button>
                <button onClick={() => handleLocationPush(citys[3])} className={styles.rec_city}>{citys[3]}</button>
            </div>
        </div>
    );
};

export default LocationSearch;
