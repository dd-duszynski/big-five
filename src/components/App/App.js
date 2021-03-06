import React from "react";
import { HashRouter } from "react-router-dom";
import "../../styles/globalStyle.scss";
import styles from "./App.module.scss";
import { AppProvider } from "../../context/context";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import MainSwitch from "../MainSwitch/MainSwitch";

const localStorageLanguage = localStorage.getItem("language");
const localStorageTheme = localStorage.getItem("theme");

const appLanguage =
   localStorageLanguage === "PL" ? "PL" : "EN";
const appTheme = localStorageTheme === "light" ? "light" : "dark";

const App = () => {
   return (
      <AppProvider appLanguage={appLanguage} appTheme={appTheme}>
         <HashRouter>
            <div className={styles.App}>
               <Header />
               <Menu />
               <MainSwitch />
            </div>
         </HashRouter>
      </AppProvider>
   );
};

export default App;
