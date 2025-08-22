import MainCarousel from "@/components/ui/MainCarousel/MainCarousel";
import styles from "./page.module.scss";
import BigCarousel from "@/components/Carousels/BigCarousel";

const page = () => {
  return (
    <main >
      <div className={styles.color}>
        <div className={styles.container}>
          <BigCarousel/>
        </div>
      </div>
    </main>
  );
};

export default page;
