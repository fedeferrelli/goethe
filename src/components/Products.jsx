import React from 'react'

function Products() {

    const productos = [1, 2, 3, 4]
    return (
        <div className="h-48  p-3 overflow-auto whitespace-nowrap">

{productos.map(e=>(

<div className="w-1/2 m-auto h-full bg-gray-200 inline-block rounded-lg border-[0.5px] border-gray-400 mr-3 shadow-md">{e}</div>

))}

           
            
            
        </div>
    )
}

export default Products
