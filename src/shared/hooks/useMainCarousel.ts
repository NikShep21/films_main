'use client';

import { act, useEffect, useState } from "react";
import { IMassiveMovie } from "../types/typesResponse";

interface UseMainCarouselProps<T> {
    data: any | null;

    
}

const useMainCarousel = <T,>({data}:UseMainCarouselProps<T>) => {

  const [carouselElem, setCarouselElem] = useState<(T | undefined)[]>(
    Array(10).fill(undefined)
  );

    const [activeIndex, setActiveIndex] = useState(2);
    const offset = activeIndex * 100;

    useEffect(() => {
    if (data) {
      const newSliderElem = [...data];
      newSliderElem.unshift(...data.slice(-3));
      newSliderElem.push(...data.slice(0, 3));
      setCarouselElem(newSliderElem);
    }
  }, [data]);


    function handleNext() {
        setActiveIndex((prevIndex)=>{
            const nextIndex = prevIndex + 1;
           
                return nextIndex
            
        })
    }

    function handlePrev() {
        setActiveIndex((prevIndex)=>{
            const nextIndex = prevIndex + -1;
           
                return nextIndex
            
        })
    }


    return {
        carouselElem,
        activeIndex,
        offset,
        handleNext,
        handlePrev,
    }
}

export default useMainCarousel