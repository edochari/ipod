import React from "react";
import styles from "../CSS/DisplayPage.module.css"
class DisplayPage extends React.Component{
   render()
   {
    return (
        <div className={styles.displaycontainer}>
          <div className={styles.display} >
            <h2 style={{padding:"15px"}}>I POD</h2>
            <ul className={styles.displaylist}>
                <li className={styles.displaylistitem}>Music</li>
                <li className={styles.displaylistitem}>Games</li>
                <li className={styles.displaylistitem}>Settings</li>
            </ul>
            
          </div>
        </div>
    )
   }
}

export default DisplayPage;