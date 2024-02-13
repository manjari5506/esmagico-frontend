import React from "react";
import { Button } from "@chakra-ui/react";
import styles from "./Section1.module.css";

const Section1 = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.leftContent}>
        <div>
          <p>Turn dreams into reality</p>
          <p>With Personal Loans</p>
        </div>
        <div>
          <div className={styles.div1}>
            <p>Content for Div 1</p>
          </div>
          <div className={styles.div2}>
            <p>Content for Div 2</p>
          </div>
        </div>
        {/* Apply Now Button */}
        <Button colorScheme="blue" mt="16px">Apply Now</Button>
      </div>

      {/* Right Content */}
      <div className={styles.rightContent}>
        <img src="https://img.freepik.com/premium-photo/father-pointing-finger-while-standing-with-wife-kids-white-background-selective-focus_466689-31811.jpg" alt="Image" />
      </div>
    </div>
  );
};

export default Section1;
