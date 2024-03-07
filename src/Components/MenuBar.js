import React from "react";
import styles from "../CSS/MenuBar.module.css"
class MenuBar extends React.Component{
   render()
   {
    return (
        <div className={styles.menubarcontainer}>
          <div className={styles.menubar} >
            
                <p className={styles.menutext}>MENU</p>
                <img src="https://cdn-icons-png.flaticon.com/128/4211/4211386.png" alt="No icon" className={styles.forwardicon}/>
                <img src="https://cdn-icons-png.flaticon.com/128/4402/4402628.png" alt="No icon" className={styles.backwardicon}/>
                <img src="https://cdn-icons-png.flaticon.com/128/5725/5725942.png" alt="No icon" className={styles.playicon}/>


           
          </div>
          <button className={styles.menubtn}>
            
             
          </button>
        </div>
    )
   }
}

export default MenuBar;