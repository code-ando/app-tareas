import React from 'react'
import '../hojas-de-estilo/Tarea.css'
import { AiFillDelete } from "react-icons/ai";

function Tarea({  texto, completada }) {
  return (
    <div className={completada ? 'tarea-contenefor completada' : 'tarea-contenedor' }>
      <div className='tarea-texto'>
        {texto}
      </div>
      <div className='tarea-contenedor-iconos'>
        <AiFillDelete className='tarea-icono'/>
      </div>
    </div>
  )
}



export default Tarea

