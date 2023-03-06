import { useState } from 'react'

import './App.css'
import imagen from './imagen/logo1.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="aplicacion-de-tareas">
      
        <div className='logo-contenedor'>
          <img
            src={imagen}
            className='logo'
          />

        </div>
        <div className='lista-principal'>
          <h1>Mis tareas</h1>

        </div>
      
    </div>
  )
}

export default App
