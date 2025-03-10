import styles from './inputs.module.css'

export function Inputs ({ 
    nome,
    placeholder,
    obrigatorio,
    valor,
    aoAlterado
}
) {

   const aoDigitar = (event) => {
       aoAlterado(event.target.value)
   }

    return(
        <div className={styles.containerInput}>
              <label>{nome}</label>
              <input value={valor} type="text" name="name" onChange={aoDigitar} required={obrigatorio}  placeholder={placeholder} />
              </div>
    )
}