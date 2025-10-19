import storeGalleta from "../context/storeGalleta";
import storeTareas from "../context/storeTareas";

const Octavo = ({ tipo }) => {
  const { detalle } = storeGalleta();
  const { tareas } = storeTareas();

  return (
    <>
      {tipo === "galleta" ? (
        <>
          <h2 className="text-purple-700">Hijo (Galletas)</h2>
          <div className="flex justify-center mb-8">
            <div className="max-w-sm border-2 border-purple-500 rounded-lg p-4 w-80 text-center">
              <p>nombre: {detalle.nombre}</p>
              <p>tipo: {detalle.tipo}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-purple-700">Hijo (Tareas)</h2>
          <div className="flex flex-col justify-center mb-8 w-full">
            {tareas.length === 0 ? (
              <p className="text-center">No hay tareas</p>
            ) : (
              tareas.map((tarea, index) => (
                <div
                  key={index}
                  className="border-2 border-purple-500 rounded-lg p-2 mb-2 w-full text-center"
                >
                  {tarea.nombre} {tarea.completada ? "(Completada)" : ""}
                </div>
              ))
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Octavo;
