import React from 'react';
import Contact from './Contact';

function Map() {
    return (
        <div className="flex flex-col justify-center items-center" id="contact">

            <div className="bg-black w-11/12 m-auto rounded-lg"><Contact/></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.1249664644242!2d-62.262891685039904!3d-38.71493979391417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95eda3e81fa3262b%3A0xa261aad1833b38ce!2sGoethe%20Kaffee%20Dichter!5e0!3m2!1ses-419!2sar!4v1660957610676!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" 
            className="w-full h-96 mt-6 border border-gray-300"></iframe>
        </div>
    )
}

export default Map
