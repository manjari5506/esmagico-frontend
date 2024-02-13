import React from "react";
import { FaSearch, FaMapMarkerAlt, FaShoppingCart, FaBell, FaUser } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>

      <div className={styles.leftPart}>
       
        <img src="data:image/png;base64,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" alt="Logo" className={styles.logo} />

        
        <div className={styles.buttonsContainer}>
          <div className={styles.button}>Offers</div>
          <div className={styles.button}>Stories</div>
          <div className={styles.button}>Tata Pay</div>
          <div className={styles.button}>NeuPass</div>
        </div>
      </div>

      
      <div className={styles.emptySpace}></div>

      
      <div className={styles.searchInput}>
        <div className={styles.searchIcon}>
          <FaSearch color="#A0AEC0" />
        </div>
        <input type="text" placeholder="Search Tata Neu" />
      </div>

      {/* Right Part */}
      <div className={styles.rightPart}>
       
        <span>122018</span>
        
        <FaMapMarkerAlt color="#A0AEC0" />

        
        <FaShoppingCart className={styles.icon} />

        
        <FaBell className={styles.icon} />

       
        <FaUser className={styles.icon} />
      </div>
    </div>
  );
};

export default Navbar;
