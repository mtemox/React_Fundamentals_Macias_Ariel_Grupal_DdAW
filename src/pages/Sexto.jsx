/*

  1- Props 

*/

const Sexto = ({ data }) => {

  return (
    <>
      <h2 className="text-orange-800">Hijo</h2>
      
      <div className="flex justify-center mb-8">
        
        <div className="max-w-sm border-2 border-orange-500 rounded-lg p-4 w-80 text-center">
          
          <h2 className="text-lg font-semibold mb-2">Bienvenido(a) - {data.name}</h2>

          {data.rol && <p className="mb-3">rol: {data.rol}</p>}
          {data.email && <p className="mb-3">email: {data.email}</p>}
          {data.price && <p className="mb-3">price: ${data.price}</p>}
          {data.inStock !== undefined && <p className="mb-3">in stock: {data.inStock ? "Yes" : "No"}</p>}
        
        </div>

      </div>

    </>
  )
}

export default Sexto
