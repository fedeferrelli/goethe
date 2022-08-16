import React, { useState } from "react";
import { TbCoffee, TbCoffeeOff } from "react-icons/tb";
import { navBarItems } from "../assets/utils/navBarItems";
import {Fade} from 'react-awesome-reveal'

function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="w-full relative">
      <div className="w-full h-96 z-10  absolute overflow-hidden">
        <div className="w-full h-full bg-black/50 z-10 absolute ">
          <div className="mr-0 text-right flex justify-end text-gray-200">
     <div className="m-2 h-12 w-12 bg-black/80 rounded-full flex flex-col absolute">
              {showNav ? (
                <TbCoffeeOff
                  className="m-auto w-full h-full p-2"
                  onClick={() => setShowNav(!showNav)}
                />
              ) : (
                <TbCoffee
                  className="m-auto w-full h-full p-2"
                  onClick={() => setShowNav(!showNav)}
                />
              )}
            </div>
          </div>

          {showNav && (
             <Fade direction="left" duration='500'> 
            <div className="absolute w-full mt-16   py-10 px-3 text-xl font-extralight bg-black flex flex-col gap-6">
            
            {navBarItems.map((e) => (
                <Fade delay='50' key={e.item}><div
                  
                  className="text-gray-100 font-Serif_Pro uppercase"
                >
                  {e.item}
                </div></Fade>
              ))}
            </div></Fade>
          )}

          <div className="w-full h-full flex flex-col justify-center items-center p-4">
            <h1 className="text-6xl font-Serif_Pro font-bold text-gray-100 tracking-wide">Goethe Kaffee Dichter</h1>
            
            <Fade delay='80' triggerOnce  className="w-full -z-10">
            <h1 className="uppercase text-xl  font-Serif_Pro font-thin w-full text-right mt-4 text-gray-100 tracking-widest">
           poetas del café
            </h1></Fade>
            
            </div>
        </div>

        <div
          style={{
            backgroundImage:
              "url(" +
              "https://media.istockphoto.com/photos/coffee-bean-picture-id466732980?k=20&m=466732980&s=612x612&w=0&h=egxHiPme2a8Q4ZQyQBM6XVxYy7ELmYkZOCWyEhpbjxQ=" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
          className="sepia"
        ></div>
      </div>
    </div>
  );
}

export default Nav;
