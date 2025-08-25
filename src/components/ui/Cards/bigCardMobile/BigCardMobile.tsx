"use client";
import styles from "./BigCardMobile.module.scss";
import { IMassiveMovie, IMassiveTv } from "@/shared/types/typesResponse";
import { getUrlImage } from "@/shared/utils/utils";
import Image from "next/image";

interface ICard {
  data: IMassiveMovie;
  ref?: React.RefObject<HTMLDivElement>;
  aspect?: string;
}
const BigCardMobile = ({ data, aspect }: ICard) => {
  return (
    <div style={{aspectRatio:aspect}} className={styles.card}>
      <Image sizes="(max-width: 600px) 100vw, 50vw" fill alt="Image" src={getUrlImage(data.poster_path)} ></Image>
    </div>
  );
};

export default BigCardMobile;
