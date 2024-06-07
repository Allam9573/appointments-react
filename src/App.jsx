import { useState } from 'react'
import { CrearCita } from './components/CrearCita'
import { ListaCitas } from './components/ListaCitas'

function App() {


  return (
    <>
      <h2 className='text-center text-secondary my-5 fs-1'>Citas Medicas</h2>
      <ListaCitas  />
    </>
  )
}

export default App
