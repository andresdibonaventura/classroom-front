import React from 'react'
import ReturnButton from './ReturnButton'

const Niveles = () => {
  return (
   <div>
    <ReturnButton />
    <div className=' ola'>
    <h1 className='level-text'>Nivel 1</h1>
    <h3>Pronombres personales</h3>
    <h3>Verbo to be</h3>
    <h3>Función de objetos, etc..</h3>
    </div>

    <div className='ola'>
    <h1 className='level-text'>Nivel 2</h1>
    <h3>Tiempos verbales</h3>
    <h3>Proposición de movimientos</h3>
    <h3>Adjetivos y adverbios, etc...</h3>
    </div>

    <div className='ola'>
    <h1 className='level-text'>Nivel 3</h1>
    <h3>Uso de conectores</h3>
    <h3>Phrasal verbs</h3>
    <h3>Charlas (conversacional), etc...</h3>
    </div>
   </div>
  )
}

export default Niveles