
import styles from './cards.module.css'
export function Cards({nome, cargo, imagem}) {

     const img = `https://github.com/${imagem}.png`

    return(
        <div className={styles.container}>
            <div className={styles.containerColaborador}>
                <span></span>
                <img src={img} alt={nome}/>
                <h4>{nome}</h4>
                <p>{cargo}</p>
            </div>

    </div>
    )
}