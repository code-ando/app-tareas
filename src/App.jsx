import { useState } from 'react'

import './App.css'
import imagen from './imagen/logo1.jpg'
import Tarea from './component/Tarea'
import TareaFormulario from './component/TareaFormulario'

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
            
            <TareaFormulario/>
        </div>
      
    </div>
  )
}

export default App
