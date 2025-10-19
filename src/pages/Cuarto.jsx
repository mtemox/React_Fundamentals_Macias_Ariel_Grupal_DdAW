/*

  1- customHook

*/

import { useState } from "react"
import { useFetch } from "../customHook/useFetch"
import { useWindowSize } from "../customHook/useWindowSize" 

const Cuarto = () => {
  
  const [products, setProducts] = useState([])
  const [memes, setMemes] = useState([])
  
  const fetchDataBackend = useFetch()
  const { width, height } = useWindowSize() 

  const getDataProducts = async()=> {
    const products = await fetchDataBackend("https://fakestoreapi.com/products")
    setProducts(products)
    console.log(products)  
  }
  
  const getDataMemes = async()=> {
    const memes = await fetchDataBackend("https://api.imgflip.com/get_memes")
    setMemes(memes)
    console.log(memes)  
  }

  return (
    <>
      <h1 className="font-bold text-2xl">customHook</h1>

      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Es un Hook que permite encapsular lógica reutilizable y que puede ser utilizado en cualquier componente.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">

        <div className="w-120 border rounded-lg p-4 w-80 text-center">

          <h2 className="text-lg font-semibold mb-2 underline">Más información</h2>
          <p className="mb-3 text-left mb-4"></p>
          <pre>{JSON.stringify(products[3]?.title)}</pre>
          <pre>{JSON.stringify(memes.data?.memes[0]?.name)}</pre>
          
          <button 
            className="bg-violet-700 text-white py-1 px-3 mx-1 rounded mt-4" 
            onClick={getDataProducts}
          >
            Obtener Productos
          </button>
          
          <button 
            className="bg-violet-700 text-white py-1 px-3 rounded" 
            onClick={getDataMemes}
          >
            Obtener Memes
          </button>
        </div>
      </div>

      {/*NUEVO EJEMPLO */}
      <div className="flex justify-center mt-10">
        <div className="border rounded-lg p-4 w-80 text-center bg-indigo-100 shadow-lg">
          <h2 className="text-lg font-semibold mb-2 underline">
            Nuevo Ejemplo: Tamaño de la Ventana
          </h2>
          <p>📏 Ancho: <b>{width}px</b></p>
          <p>📐 Alto: <b>{height}px</b></p>  
        </div>
      </div>
    </>
  )
}

export default Cuarto
