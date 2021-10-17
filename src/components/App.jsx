import React from "react";
import styles from "./App.module.css";

import MainInfo from "./MainInfo/MainInfo.jsx";
import RightPanel from "./RightPanel/RightPanel";

const App = () => {
    return (
        <div className={styles.mainContainer}>
            <MainInfo />
            <RightPanel />
        </div>
    );
};

export default App;
