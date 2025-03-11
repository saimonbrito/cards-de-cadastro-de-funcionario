
import styles from './footer.module.css';

export function Footer() {
  return (
    <footer>
      <div className={styles.container}>
        <span>
            <img src="./fb.png"  />
            <img src="./tw.png"  />
            <img src="./ig.png"  />
        </span>
        <img src="./logo.png" />
        <p>Desenvolvido por Alura.</p>
      </div>
    </footer>
  );
}