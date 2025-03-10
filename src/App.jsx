
import {Banner} from './components/Banner'
import {Form} from './components/form'
import './App.css'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdcionado = (colaborador) => {
    console.log('Colaborador ')
    setColaboradores([...colaboradores, colaborador])
  }
  

  return (
    <div className='container'>
         <Banner /> 
         <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)}/>

    </div>
  )
}

export default App
