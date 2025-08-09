import styles from './ImagePlaceholder.module.scss'
import { GiFilmSpool } from "react-icons/gi";

const ImagePlaceholder = ({size}:{size:number}) => {
  return (
    <div className={styles.imagePlaceholder} >
      <div className={styles.content}>
        <GiFilmSpool size={size}/>
        
      </div>
    
    </div>
  )
}

export default ImagePlaceholder