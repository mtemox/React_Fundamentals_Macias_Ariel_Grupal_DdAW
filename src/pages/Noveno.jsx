/*

  1- Rederizado condicional
  2- Renderizado de listas

*/

import { useState } from "react"



const Noveno = () => {

  const [login, setLogin] = useState(false)
  const [habilidades] = useState([
    { nombre: "HTML", icono: "📙" },
    { nombre: "CSS", icono: "📘" },
    { nombre: "JavaScript", icono: "📒" },
    { nombre: "React", icono: "⚛️" },
    { nombre: "Node.js", icono: "📗" },
  ])

  // Nuevos estados

  const [mostrarNotificacion, setMostrarNotificacion] = useState(true)
  const [tareas] = useState([
    { id: 1, texto: "Estudiar para el examen", completada: false },
    { id: 2, texto: "Hacer el deber de matemáticas", completada: true },
    { id: 3, texto: "Comprar pan para la merienda", completada: false },
  ])

  return (
    <>
      <h1 className="font-bold text-2xl">Renderizado</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
        <strong>Renderizado condicional:</strong> Permite mostrar u ocultar elementos de la interfaz según ciertas condiciones.
        </li>
        <li>
          <strong>Renderizado de listas:</strong> Permite mostrar múltiples elementos a partir de un array usando métodos de los arreglos.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        <div className="border rounded-lg p-4 w-120 mx-auto text-center">
          
          <h2 className="text-1xl font-bold text-left underline mb-4">Condicional</h2>

          {login 
            ? 
          (
            <p>¡Bienvenido de nuevo! 😎 </p>
          ) 
            : 
          (
           <p>Por favor, inicia sesión</p>
          )}

          <button className="mt-2 bg-blue-600 text-white py-1 px-3 rounded" onClick={() => setLogin(!login)}>
            {login ? "Cerrar sesión" : "Iniciar sesión"}
          </button>

        </div>

      </div>

      <div className="flex justify-center mb-8">

        <div className=" border rounded-lg p-4 w-120 mx-auto text-center">

          <h2 className="text-1xl font-bold text-left underline mb-4">Listas</h2>
          
            <ul className="list-disc pl-5 text-left">
              
              {habilidades.map((habilidad, index) => (
      
                <li key={index}>{habilidad.icono} - {habilidad.nombre}</li>
      
              ))}
            
            </ul>
          
        </div>

      </div>

      {/* Nuevo ejemplo */}

      <h2 className="text-2xl font-bold text-center mt-12 mb-4">Nuevo Ejemplo</h2>
      <div className="flex justify-center mb-8 mt-8 gap-4">
        
        {/* Nuevo Ejemplo Condicional */}
        <div className="border rounded-lg p-4 w-120 mx-auto text-center">
          <h2 className="text-1xl font-bold text-left underline mb-4">Condicional (Notificación)</h2>

          <button 
            className="mt-2 bg-purple-600 text-white py-1 px-3 rounded mb-4" 
            onClick={() => setMostrarNotificacion(!mostrarNotificacion)}
          >
            {mostrarNotificacion ? 'Ocultar Notificación' : 'Mostrar Notificación'}
          </button>

          {/* Si `mostrarNotificacion` es true, se muestra el div */}
          {mostrarNotificacion && (
            <div className="bg-yellow-200 border border-yellow-500 p-2 rounded">
              <p>🔔 ¡Tienes una nueva notificación!</p>
            </div>
          )}
        </div>

        {/* Nuevo Ejemplo de Listas */}
        <div className="border rounded-lg p-4 w-120 mx-auto text-center">
          <h2 className="text-1xl font-bold text-left underline mb-4">Listas (Tareas Pendientes)</h2>
          <ul className="list-decimal pl-5 text-left">
            {tareas.map(tarea => (
              <li key={tarea.id} style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
                {tarea.texto} {tarea.completada ? '✅' : '⏳'}
              </li>
            ))}
          </ul>
        </div>
      </div>
      


    </>
  )
  }

export default Noveno