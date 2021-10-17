import React from "react";
import styles from "./RightPanel.module.css";

import LocationSearch from "./LocationSearch";
import Details from "./Details";

const RightPanel = () =>{
	return(
		<div className={styles.rightPanel}>
			<LocationSearch/>
			<p>_______________________________________________</p>
			<Details/>
			<p>_______________________________________________</p>
		</div>
	);
}

export default RightPanel;