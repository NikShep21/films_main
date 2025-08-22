'use client'
import MainCarousel from "../ui/MainCarousel/MainCarousel"
import { useGetMassiveTitles } from "@/api/services/Titles/TitlesHooks"

const BigCarousel = () => {
const { data, isLoading } = useGetMassiveTitles("popular", "movie")
  return (
    <MainCarousel data={data} isLoading={isLoading}/>
  )
}

export default BigCarousel