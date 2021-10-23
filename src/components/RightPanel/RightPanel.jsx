import React from "react";
import styles from "./RightPanel.module.css";

import LocationSearch from "./LocationSearch";
import Details from "./Details";

const RightPanel = (props) =>{
	return(
		<div className={styles.rightPanel}>
			<LocationSearch search={props.search}/>
			<p>_______________________________________________</p>
			<Details c={props.cloudy} h={props.humidity} w={props.wind} p={props.pressure}/>
			<p>_______________________________________________</p>
		</div>
	);
}

export default RightPanel;