import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import { AppContext } from "../../context/context";
import HamburgerMenu from "../UI/HamburgerMenu"
import Drawer from "./Drawer/Drawer"

const Header = () => {
   const [isDrawerOpen, setDrawerOpen] = useState(false)
   const { textContent, theme, size } = useContext(AppContext);

   let css;
   theme === "light" ? (css = styles.headerLight) : (css = styles.headerDark);

   const isDrawerOpenHandler = () => {
      setDrawerOpen(!isDrawerOpen)
   }

   const smallDevice = (
      <HamburgerMenu onClick={isDrawerOpenHandler} isDrawerOpen={isDrawerOpen} />
   )

   const largeDevice = (
      <nav>
         <ul className={styles.navList}>
            <li>
               <NavLink
                  className={styles.navListItem}
                  activeClassName={styles.navListItemActive}
                  exact
                  to="/"
               >
                  {textContent.navigation.home}
               </NavLink>
            </li>
            <li>
               <NavLink
                  className={styles.navListItem}
                  activeClassName={styles.navListItemActive}
                  exact
                  to="/settings"
               >
                  {textContent.navigation.setting}
               </NavLink>
            </li>
            <li>
               <NavLink
                  className={styles.navListItem}
                  activeClassName={styles.navListItemActive}
                  exact
                  to="/info"
               >
                  {textContent.navigation.information}
               </NavLink>
            </li>
         </ul>
      </nav>
   )
   return (
      <>
         <header className={css}>
            <Link to="/">
               <h1 className={styles.home}>BIG FIVE</h1>
            </Link>
            {size > 1000 ? largeDevice : smallDevice}
         </header>
         <Drawer isDrawerOpenHandler={isDrawerOpenHandler} isDrawerOpen={isDrawerOpen} />
      </>
   );
};

export default Header;
