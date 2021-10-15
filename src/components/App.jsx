import React from "react";
import styles from "./App.module.css"

const App = () => {
	return(
		<div className={styles.mainContainer}>
			<div className={styles.mainInfo}>
				<div className={styles.degrees}>26°</div>
				<div className={styles.city_time}>
					<div className={styles.city}>London</div>
					<div className={styles.time}>10:36 - Tuesday, 22 Oct '19</div>
				</div>
			</div>
			<div className="rightPanelContainer">
				<div className="locationSearch">
				</div>
				<div className="details">

				</div>
			</div>
		</div>
	);
}

export default App;