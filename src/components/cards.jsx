
import styles from './cards.module.css'
export function Cards({nome, cargo, imagem,corDeFundo}) {
     const img = `https://github.com/${imagem}.png`
     const img2 = './usu.png'
     const img3 = !imagem ? img2 : img;
     
    return(
        <div className={styles.container}>
            <div className={styles.containerColaborador}>
                <span style={{backgroundColor:corDeFundo}}></span>
                <img src={img3} alt={nome}/>
                <h4>{nome}</h4>
                <p>{cargo}</p>
            </div>

    </div>
    )
}