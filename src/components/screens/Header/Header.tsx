import Link from "next/link";
import styles from "./Header.module.scss";


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          
          <h1 className={styles.name}>Films</h1>
        </div>
        <nav>
          <ul className={styles.navContainer}>
            
            <li>
              <Link href="/categorie">CATEGORIE</Link>
            </li>
            <li>
              <Link href="/recommended">RECOMMENDED</Link>
            </li>
            <li>
              <Link href="/news">NEWS</Link>
            </li>
            <li>
              <Link href="/Search">SEARCH</Link>
            </li>
          </ul>
        </nav>
        
      </div>
    </header>
  );
};

export default Header;
