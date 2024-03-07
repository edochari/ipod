import React from "react";
import styles from "../CSS/HomePage.module.css"
import DisplayPage from "./DisplayPage";
import MenuBar from "./MenuBar";
class HomePage extends React.Component{
   render()
   {
    return (
        <div className={styles.homepagecontainer}>
          <div className={styles.homepage} >
             <DisplayPage />
             <MenuBar />
          </div>
        </div>
    )
   }
}

export default HomePage;