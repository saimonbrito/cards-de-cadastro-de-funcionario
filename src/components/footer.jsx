
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
        
        <p><p>Desenvolvido</p> Dev. <p>Mauricio Fernandes</p></p>
      </div>
    </footer>
  );
}