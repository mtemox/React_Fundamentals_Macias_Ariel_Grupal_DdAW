/*
  2- useEffect
*/

import { useEffect, useState } from "react"

const Reloj = () => {
  const [hora, setHora] = useState(new Date().toLocaleTimeString())

  useEffect(() => {
    // Actualiza la hora cada segundo
    const intervalo = setInterval(() => {
      setHora(new Date().toLocaleTimeString())
    }, 1000)

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalo)
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 text-gray-800">
      <h1 className="font-bold text-2xl mb-4">useEffect</h1>

      <hr className="border-gray-400 mb-8 w-2/3" />

      <ul className="list-disc pl-5 mb-6 text-left">
        <li>Se utiliza para manejar efectos secundarios, como temporizadores o suscripciones.</li>
        <li>Puede ejecutarse una vez o en respuesta a cambios en el estado o las props.</li>
      </ul>

      <div className="text-center p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-lg font-semibold mb-2">Reloj en tiempo real 🕒</h2>
        <p className="text-4xl font-mono mt-4">{hora}</p>
      </div>
    </div>
  )
}

export default Reloj