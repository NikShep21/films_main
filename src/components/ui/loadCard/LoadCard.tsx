import React, { forwardRef } from "react";
import styles from "./LoadCard.module.scss";

interface PropsType extends React.HTMLAttributes<HTMLDivElement> {
  height?: string;
  width?: string;
  aspect?: string;
  isText?:boolean
}

const LoadCard = forwardRef<HTMLDivElement, PropsType>(
  ({ height, width, aspect = "", className = "",isText=false,...rest }, ref) => {
    
    return (
      <div>

        <div
          ref={ref} 
          style={{width:width, aspectRatio: aspect, height: height, }}
          className={`${styles.loadCard} ${className}`}
          {...rest}
        ></div>
        {
          isText ? 
          <div className={styles.text}></div>
          :
          null
        }
        
      </div>
    );
  }
);

export default LoadCard;
