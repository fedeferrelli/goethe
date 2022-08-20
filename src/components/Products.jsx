import React from 'react';

import CafeBlack from '../assets/images/cafe_black.jpg';
import CupCake from '../assets/images/cup_cake.jpg';
import Cheers from '../assets/images/cheers.jpg';
import Milk from '../assets/images/milk.jpg';
import Pouring from '../assets/images/pouring_coffee.jpg';
import Brunch from '../assets/images/brunch.jpg';

import productsToShow from '../assets/utils/productsToShow';

function Products() {

    const productos = [CafeBlack, CupCake, Cheers, Milk]
    return (
        <div className="h-72  p-3 overflow-auto whitespace-nowrap">

{productsToShow.map(e=>(


<div className="w-1/2 m-auto h-full inline-block rounded-lg border-[0.5px] border-gray-400 mr-3 shadow-md overflow-hidden text-gray-800">
    
    <div className="h-28 overflow-hidden">
    <img className="w-full " src={e.image}/>
    </div>

    <section className="h-36 flex flex-col justify-between p-4 whitespace-normal">

        <div className="flex flex-col">
            <h1 className="font font-semibold tracking-wide">{e.name.slice(0,28)}</h1>
            <p className="mt-1 text-xs  font-light inline-block">{e.descripcion.slice(0,70)}</p>
        </div>

        <div className="font font-semibold">${e.precio}</div>

    </section>
    
    
    </div>

))}

           
            
            
        </div>
    )
}

export default Products
