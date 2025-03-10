
import styles from './form.module.css'
import {Inputs} from './components-modulos/inputs'
import { ListaSuspensa } from './components-modulos/listaSuspensa'
import { useState } from 'react'




export function Form({aoColaboradorCadastrado})  {

    const times= ['Frontend', 'Data Science', 'Devops', 'UX e Desing','mobile','Inovação e gestão']

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')  
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('') 
  

    const onSalvar= (event) => {
        event.preventDefault()
        aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })
        
    }

    return (
        <div>
            <form onSubmit={onSalvar} className={styles.containerForm}>

            <h4>Preencha os dados para criar o card do colaborador.</h4>

            <Inputs 
             obrigatorio={true}
            nome={'Nome'} 
            placeholder={'Digite seu nome'} 
            valor={nome}
            aoAlterado={valor => setNome(valor)}
            />

            <Inputs  
            obrigatorio={true} 
            nome={'Cargo'} 
            placeholder={'Digite cargo'}
            valor={cargo}
            aoAlterado={valor => setCargo(valor)}
            />
            <Inputs

            obrigatorio={true} 
            nome={'Imagem'} 
            placeholder={'Informe o endereço da imagem'}
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
            />

            <ListaSuspensa  
            items={times} 
            label={'Lista suspensa'}    
            valor={time}
            aoAlterado={valor => setTime(valor)}
            />

            <div className={styles.containerInputSubmit}>
                <input type="submit" value="criar card" />
            </div> 
            </form>

        </div>
    )
}