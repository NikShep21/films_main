import MainCarousel from "@/components/ui/MainCarousel/MainCarousel";
import styles from "./page.module.scss";

const page = () => {
  return (
    <main >
      <div className={styles.color}>
        <div className={styles.container}>
          <MainCarousel />
        </div>
      </div>
    </main>
  );
};

export default page;
