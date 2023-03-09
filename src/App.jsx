

import './App.css'
import imagen from './imagen/logo1.jpg'


import ListaDeTareas from './component/ListaDeTareas'

function App() {
  

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
            <ListaDeTareas/>
        </div>
      
    </div>
  )
}

export default App
