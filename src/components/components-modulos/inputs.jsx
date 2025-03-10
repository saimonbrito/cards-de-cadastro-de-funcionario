import styles from './inputs.module.css'

export function Inputs ({ nome,placeholder}) {
    return(
        <div className={styles.containerInput}>
              <label>{nome}</label>
              <input type="text" name="name" placeholder={placeholder} />
              </div>
    )
}