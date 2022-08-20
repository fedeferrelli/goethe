import Image from '../images/carrousel.jpg'
import CafeBlack from '../images/cafe_black.jpg';
import CupCake from '../images/cup_cake.jpg';
import Cheers from '../images/cheers.jpg';
import Milk from '../images/milk.jpg';
import Pouring from '../images/pouring_coffee.jpg';
import Brunch from '../images/brunch.jpg'



const productsToShow = [

    {name: 'Cafe negro ', 
    image: Image, 
    descripcion : 'Café expreso y fina capa de leche texturizada texturizada texturizada texturizada texturizada texturizada',
     precio : 80},

     {name: 'Cafe negro Power', 
     image: CafeBlack, 
     descripcion : 'Café expreso intenso',
      precio : 480},

      {name: 'Cafe en Taza amarilla', 
    image:Milk, 
    descripcion : 'Café servido en lña mejor taza del condado',
     precio : 480},

     {name: 'Cafecito', 
    image:Pouring, 
    descripcion : 'Café para compratir en cualquier momento del día',
     precio : 480.5},


];

export default productsToShow;