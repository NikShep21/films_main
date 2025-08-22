import { IMassiveMovie, IMassiveTv } from "../types/typesResponse"
import { API_IMAGE_URL } from "@/shared/variables/variables";

const imagePath = API_IMAGE_URL;
export const isMovie = (data:IMassiveMovie | IMassiveTv): data is IMassiveMovie =>{
    return 'title' in data
}

export const getUrlImage = (path:string, size:string = 'original'):string=>{
    return `${imagePath}/${size}${path}`

}
