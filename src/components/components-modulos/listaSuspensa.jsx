import styles from './listaSuspensa.module.css'

export function ListaSuspensa({items,label,valor,aoAlterado}) {
    return(
        <div className={styles.container}>
            <label>{label}</label>
            <select onChange={event =>  aoAlterado(event.target.value)} value={valor} className={styles.containerListaSuspensa}>
                <option value=""></option>
                {items.map(item => {
                    return <option key={item} >{item}</option>
               })}
            </select>
        </div>
    )
}