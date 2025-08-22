import styles from './ImagePlaceholder.module.scss'
import { GiFilmSpool } from "react-icons/gi";

const ImagePlaceholder = ({size=200, aspect=''}:{size?:number, aspect?:string}) => {
  return (
    <div style={{aspectRatio:aspect}} className={styles.imagePlaceholder} >
      <div className={styles.content}>
        <GiFilmSpool size={size}/>
        
      </div>
    
    </div>
  )
}

export default ImagePlaceholder