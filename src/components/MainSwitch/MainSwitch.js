import React, { useState, useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styles from "./MainSwitch.module.scss";
import BigFive from "../BigFive/BigFive";
import Settings from "../Settings/Settings";
import Info from "../Info/Info";
import Table from "../Table/Table";
import Results from "../Results/Results";
import Scorers from "../Scorers/Scorers";
import { AppContext } from "../../context/context";

const MainSwitch = () => {
   const [imageIndex, setImageIndex] = useState(0);

   const { theme } = useContext(AppContext);

   const getRandom = (min, max) => {
      let nr = Math.round(Math.random() * (max - min));
      setImageIndex(nr);
   };

   useEffect(() => {
      getRandom(0, 6);
   }, []);

   const img = [
      styles.img1,
      styles.img2,
      styles.img3,
      styles.img4,
      styles.img5,
      styles.img6,
      styles.img7,
   ];

   let css;
   theme === "light" ? (css = styles.MainSwitchLight) : (css = styles.MainSwitchDark);

   return (
      <div className={css}>
         <Switch>
            <Route path="/settings" component={Settings} />
            <Route path="/info" component={Info} />
            <Route path="/table/:id" component={Table} />
            <Route path="/results/:id" component={Results} />
            <Route path="/scorers/:id" component={Scorers} />
            <Route exact path="/" component={BigFive} />
            <Redirect to="/" />
         </Switch>
         <div className={styles.imgContainer}>
            <img className={[img[imageIndex], styles.backgroundImage].join(" ")} alt="football"/>
         </div>
      </div>
   );
};

export default MainSwitch;
