
import styles from './Time.module.css'

import {Cards} from './cards'

export function Time({nome, corPrimaria, corSecundaria, colaboradores}) {

    const corSecundaria2 = {backgroundColor: corSecundaria}
    const corPrimaria2 = {borderColor:corPrimaria }


    return (
        (colaboradores.length > 0 ) ?
            <section className={styles.container} style={corSecundaria2}>
            <h3 style={corPrimaria2}>{nome}</h3>
           <div className={styles.containerCards}>
                {colaboradores.map(colaborador =>
                <Cards key={colaborador.nome} nome={colaborador.nome} corDeFundo={corPrimaria} cargo={colaborador.cargo} imagem={colaborador.imagem}/>
            )}
           </div> 
        </section>
        : ""
        

    )
}