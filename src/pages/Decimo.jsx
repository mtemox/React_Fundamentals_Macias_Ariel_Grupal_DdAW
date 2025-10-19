/*

  1- Localstorage

*/

import { useEffect, useState } from "react"


const Decimo = () => {

  const [userToken, setUserToken] = useState({})

  const user = {
    name: "Byron",
    rol: "Admin",
    token:"1234***"
  }


  const obtenerToken = ()=>{
    const token = JSON.parse(localStorage.getItem("token-user"))
    setUserToken(token)
  }
  
  const limpiarToken = ()=>{
    localStorage.removeItem("token-user")
    setUserToken(null)
  }
  


  useEffect(() => {
    localStorage.setItem("token-user", JSON.stringify(user))
  }, [])

  // Nuevo estado y funciones para el ejemplo
  // Se intenta leer el tema del localStorage, si no existe, se usa 'claro' por defecto
  const [theme, setTheme] = useState(() => localStorage.getItem('theme-preference') || 'claro')

  // Función para cambiar el tema y guardarlo en localStorage
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme)
    localStorage.setItem('theme-preference', newTheme)
  }

  // Efecto para aplicar el estilo al body
  useEffect(() => {
    if (theme === 'oscuro') {
      document.body.style.backgroundColor = '#2d3748';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
    // Cleanup function para resetear el estilo cuando el componente se desmonte
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    }
  }, [theme])
  

return (
  <>
    <h1 className="font-bold text-2xl">Localstorage</h1>

    <hr className="border-gray-400 mb-8"/>

    <ul className="list-disc pl-5">
      <li>
        LocalStorage sirve para mantener información en el navegador incluso después de recargar o cerrar la página.
      </li>
      <li>
        Los datos se guardan en pares clave–valor (como un diccionario).
      </li>
      <li>
        Solo admite strings → si se quiere guardar se debe usar JSON.stringify() y para leerlos se usa JSON.parse()
      </li>
    </ul>




    <div className="flex justify-center mb-8 mt-8">

      <div className="w-120 border rounded-lg p-4 w-80 text-center">

        <h2 className="text-lg font-semibold mb-2">{userToken?.name}</h2>

        <p className="mb-3">{userToken?.rol}</p>
        
        <p className="mb-3">{userToken?.token}</p>

        <button className="bg-green-700 text-white py-1 px-3 mx-1 rounded mt-4" onClick={obtenerToken}>Obtener Token</button>
        <button className="bg-red-700 text-white py-1 px-3 rounded" onClick={limpiarToken}>Limpiar Token</button>
      </div>

    </div>

    {/* Nuevo ejemplo */}

    <h2 className="text-2xl font-bold text-center mt-12 mb-4">Nuevo Ejemplo</h2>
      <div className="flex justify-center mb-8 mt-8">
        <div className="w-120 border rounded-lg p-4 w-80 text-center">
          <h2 className="text-1xl font-bold text-left underline mb-4">Preferencia de Tema</h2>
          <p className="mb-4">
            El tema actual es: <strong>{theme === 'claro' ? '☀️ Claro' : '🌙 Oscuro'}</strong>
          </p>
          <p className="text-sm text-gray-500 mb-4">
            (La elección se mantiene al recargar la página.)
          </p>
          <button 
            className="bg-gray-200 text-black py-1 px-3 mx-1 rounded"
            onClick={() => handleThemeChange('claro')}
          >
            Tema Claro
          </button>
          <button 
            className="bg-gray-800 text-white py-1 px-3 mx-1 rounded"
            onClick={() => handleThemeChange('oscuro')}
          >
            Tema Oscuro
          </button>
        </div>
      </div>

  </>
)
}

export default Decimo