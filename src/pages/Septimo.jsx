import storeGalleta from "../context/storeGalleta";
import storeTareas from "../context/storeTareas";
import Octavo from "./Octavo";
import { useState } from "react";

const Septimo = () => {
  // Primer ejemplo: galletas
  const { detalle, setGalleta } = storeGalleta();

  // Segundo ejemplo: tareas
  const { tareas, agregarTarea } = storeTareas();
  const [input, setInput] = useState("");

  return (
    <>
      <h1 className="font-bold text-2xl">Zustand - Ejemplos Múltiples</h1>
      <hr className="border-gray-400 mb-8"/>

      
      <h2 className="text-blue-700 text-center mt-8">Padre (Galletas)</h2>
      <div className="border-2 border-blue-500 flex flex-col justify-center items-center w-120 mx-auto mb-8 p-4">
        <Octavo tipo="galleta"/>
        <p>nombre: {detalle.nombre}</p>
        <p>tipo: {detalle.tipo}</p>
        <button
          className="bg-gray-600 text-white py-1 px-3 rounded w-full mt-4"
          onClick={() => setGalleta({ nombre: "BIMBO", tipo: "Ponkey" })}
        >
          Cambiar galleta
        </button>
      </div>

      <h2 className="text-green-700 text-center mt-8">Padre (Tareas)</h2>
      <div className="border-2 border-green-500 flex flex-col justify-center items-center w-120 mx-auto mb-8 p-4">
        <input
          type="text"
          placeholder="Nueva tarea"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 rounded mb-2 w-full"
        />
        <button
          className="bg-gray-600 text-white py-1 px-3 rounded w-full mb-4"
          onClick={() => {
            if (input.trim() !== "") {
              agregarTarea({ nombre: input, completada: false });
              setInput("");
            }
          }}
        >
          Agregar tarea
        </button>
        <Octavo tipo="tarea"/>
      </div>
    </>
  );
};

export default Septimo;
