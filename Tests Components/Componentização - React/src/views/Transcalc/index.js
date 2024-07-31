import React from 'react'
import './style.scss'

// Components
import Primario from './Primario'
import DadosBase from './DadosBase'
import Secundario from './Secundario'
import Nucleo from './Nucleo'
import Resultados from './Resultados'

function Transcalc() {

  return (
    <div className='transcalc'>
      <DadosBase />
      <Primario />
      <Secundario />
      <Nucleo />
      <Resultados />
    </div>
  )
}

export default Transcalc
