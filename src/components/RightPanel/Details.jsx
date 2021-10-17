import React from "react";
import styles from "./Details.module.css";

const Details = () => {
    return (
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
    );
};

export default Details;
