import React, {useState, useEffect} from 'react';
import {Fade} from 'react-awesome-reveal'
import CafeBlack from '../images/cafe_black.jpg';
import CupCake from '../images/cup_cake.jpg';
import Cheers from '../images/cheers.jpg';
import Milk from '../images/milk.jpg';
import Pouring from '../images/pouring_coffee.jpg';
import Brunch from '../images/brunch.jpg'

function Img1() {
    const imagenes = [CafeBlack, CupCake, Cheers, Milk, Pouring, Brunch]
    const [Imagen, setImagen] = useState(0)
    
useEffect(() => {

    const max = imagenes.length-1;
    let counter=0; 

    const changeImage = () =>{

        if (Imagen == max){
            counter = 0;
            setImagen(0)
        } else {
            counter = counter+1;
        setImagen(Imagen+1)}

    };

    setTimeout(changeImage, 3000);

    console.log(Imagen)
    
}, [Imagen])




    return (
        <div className="w-full h-auto overflow-hidden py-4">
       
            <img src={imagenes[Imagen]} />
            
        </div>
    )
}

export default Img1
