"use client";
import { IMassiveMovie } from "@/shared/types/typesResponse";
import styles from "./MainCarousel.module.scss";
import { aspects } from "@/shared/variables/variables";
import { useState } from "react";
import useMainCarousel from "@/shared/hooks/useMainCarousel";
import { CardWrapper } from "../cardWrapper/CardWrapper";
import BigCard from "../Cards/bigCard/BigCard";
import LoadCard from "../loadCard/LoadCard";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
interface MainCarouselProps {
  data: IMassiveMovie[] | undefined;
  isLoading?: boolean;
  aspect?: string;
  aspectMobile?: string;
}
const MainCarousel = ({
  data,
  isLoading = false,
  aspect = aspects.ASPECT_BIG_CARD,
  aspectMobile = aspects.ASPECT_CARD,
}: MainCarouselProps) => {
  
  const { carouselElem, activeIndex, offset, handleNext, handlePrev } =
    useMainCarousel<IMassiveMovie>({ data });

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselLine}>
        {carouselElem.map((elem, index) => (
          <CardWrapper<IMassiveMovie>
            key={index}
            aspect={aspect}
            data={elem}
            isLoading={isLoading}
            className={styles.cardWrapper}
            CardComponent={BigCard}
            SkeletonComponent={LoadCard}
            PlaceholderComponent={ImagePlaceholder}
          />
        ))}
      </div>
    </div>
  );
};

export default MainCarousel;
