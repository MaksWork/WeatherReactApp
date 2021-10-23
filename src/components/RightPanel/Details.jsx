import React from "react";
import styles from "./Details.module.css";

const Details = (props) => {
    return (
        <div className={styles.details}>
            <p className={styles.d_title}>Weather details</p>
            <div className={styles.d_table}>
                <div className={`${styles.d_left} ${styles.d_column}`}>
                    <p>Cloudy</p>
                    <p>Humidity</p>
                    <p>Wind</p>
                    <p>Pressure</p>
                </div>
                <div className={`${styles.d_right} ${styles.d_column}`}>
                    <p className={styles.d_r_content}>{props.c}</p>
                    <p className={styles.d_r_content}>{props.h}</p>
                    <p className={styles.d_r_content}>{props.w}</p>
                    <p className={styles.d_r_content}>{props.p}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;
