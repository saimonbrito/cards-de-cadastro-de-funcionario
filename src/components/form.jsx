
import styles from './form.module.css'
import {Inputs} from './components-modulos/inputs'



export function Form()  {

    return (
        <form className={styles.containerForm}>

            <h4>Preencha os dados para criar o card do colaborador.</h4>

              <Inputs nome={'Nome'} placeholder={'Digite seu nome'} />
              <Inputs  nome={'Cargo'} placeholder={'Digite cargo'}/>
              <Inputs  nome={'Imagem'} placeholder={'Informe o endereço da imagem'}/>
              <Inputs  nome={'Time'} placeholder={'Digite seu nome'}/>

               <div className={styles.containerInputSubmit}>
                  <input type="submit" value="criar card" />
               </div> 
        </form>
    )
}