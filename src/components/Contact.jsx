import React from 'react';
import {ImWhatsapp, ImInstagram, ImFacebook} from 'react-icons/im'

import pedidosYa from '../assets/images/py2.png'

function Contact() {
    return (
        <div className="flex flex-row justify-evenly bg-white/10 p-4 rounded-lg">

            <a href="https://www.pedidosya.com.ar/restaurantes/bahia-blanca/goethe-kaffee-dichter-menu?origin=shop_list" target="_blank"><img src={pedidosYa} className='w-28'/></a>

            <a href="https://api.whatsapp.com/send?phone=5492914367071=Hola,%20Goethe%20Kaffee%20Dichter.%20Me%20gustaría%20hecerte%20la%20siguiente%20consulta.%0D%0A%0D%0A" target="_blank" rel="noreferrer"><ImWhatsapp className='text-2xl text-white'/></a>

            <a href="https://www.instagram.com/goethe.kaffee.dichter/?hl=es" target="_blank"><ImInstagram className='text-2xl text-white'/></a>

            <a href="https://www.facebook.com/goethe.kaffee.dichter/" target="_blank"><ImFacebook className='text-2xl text-white'/></a>


            
        </div>
    )
}

export default Contact
