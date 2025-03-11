
import {Banner} from './components/Banner'
import {Form} from './components/form'
import {Footer} from './components/footer'
import { useState } from 'react'
import { Time } from './components/Time'
import './App.css'

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const times = [
    {
      nome:'Programaçao',
      corPrimaria:'#57C278',
      corSecundaria:'#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria:'#82CFFA',
      corSecundaria:'#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria:'#A6D157',
      corSecundaria:'#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria:'E06B69',
      corSecundaria:'#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria:'#DB6EBF',
      corSecundaria:'#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria:'#FFBA05',
      corSecundaria:'#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria:'#FF8A29',
      corSecundaria:'#FFEEDF'
    }
  ]


  const aoNovoColaboradorAdcionado = (colaborador) => {
    console.log('Colaborador ')
    setColaboradores([...colaboradores, colaborador])
  }
  

  return (
    <div className='container'>
         <Banner /> 
         <Form  times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdcionado(colaborador)}/>
          {times.map(time =>
             <Time 
             nome={time.nome} 
             key={time.nome} 
             corPrimaria={time.corPrimaria} 
             corSecundaria={time.corSecundaria} 
             colaboradores=
                 {colaboradores.filter(colaborador => colaborador.time === time.nome)}
            />
          )}
          <Footer/>
    
    </div>
  )
}

export default App
