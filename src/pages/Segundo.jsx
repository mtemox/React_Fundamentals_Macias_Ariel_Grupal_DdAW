/*
  1.- useState
*/

import { useState } from "react"

const Tema = () => {

  const [darkMode, setDarkMode] = useState(false)

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-all duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <h1 className="font-bold text-2xl mb-4">useState</h1>
      <hr className={`border ${darkMode ? "border-gray-600" : "border-gray-300"} mb-8 w-2/3`} />

      <ul className="list-disc pl-5 mb-6 text-left">
        <li>Permite guardar el estado de un valor dentro de un componente.</li>
        <li>Puede ser de cualquier tipo: número, texto, booleano, objeto o arreglo.</li>
      </ul>

      <h2 className="text-lg mb-4">
        Modo actual: <span className="font-semibold">{darkMode ? "Oscuro 🌙" : "Claro ☀️"}</span>
      </h2>

      <button
        onClick={toggleTheme}
        className={`py-2 px-4 rounded transition-colors duration-300 ${
          darkMode
            ? "bg-yellow-400 text-black hover:bg-yellow-500"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        Cambiar tema
      </button>
    </div>
  )
}

export default Tema