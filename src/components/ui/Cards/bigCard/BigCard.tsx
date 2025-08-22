"use client";
import styles from "./BigCard.module.scss";
import { IMassiveMovie, IMassiveTv } from "@/shared/types/typesResponse";
import { getUrlImage } from "@/shared/utils/utils";
import Image from "next/image";

interface ICard {
  data: IMassiveMovie;
  ref?: React.RefObject<HTMLDivElement>;
  aspect?: string;
}
const BigCard = ({ data, aspect }: ICard) => {
  return (
    <div style={{aspectRatio:aspect}} className={styles.card}>
      <Image sizes="(max-width: 600px) 100vw, 50vw" fill alt="Image" src={getUrlImage(data.backdrop_path)} ></Image>
    </div>
  );
};

export default BigCard;
