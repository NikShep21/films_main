'use client'
import styles from './BigCard.module.scss'
import { IMassiveMovie, IMassiveTv } from "@/shared/types/typesResponse";
import { forwardRef } from "react";
import ImagePlaceholder from "../../ImagePlaceholder/ImagePlaceholder";

interface ICard {
  data: null | IMassiveMovie | IMassiveTv;
  ref?: React.RefObject<HTMLDivElement>;
  isLoading?: boolean;
}
const BigCard = forwardRef(({data, isLoading=false}:ICard) => {
  return(
    <div className={styles.card}>
     
    </div>
  )
})

export default BigCard