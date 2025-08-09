import { screens } from "@/shared/variables/variables";
import {useEffect, useState } from "react";

export const useResize = (ref?:React.RefObject<HTMLDivElement>) => {
    
    const [widthScreen, setWidthScreen] = useState<number>(window.innerWidth);
  
    useEffect(() => {
      const handleResize = () => {
        setWidthScreen(ref?.current? ref.current.offsetWidth : window.innerWidth);
      };
      handleResize()
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return {
      widthScreen,
      isScreenSm: widthScreen <= screens.SCREEN_SM,
      isScreenMd: widthScreen <= screens.SCREEN_MD,
      
    };
  };