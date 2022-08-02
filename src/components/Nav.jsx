import React, {useState} from "react";
import {TbCoffee, TbCoffeeOff} from 'react-icons/tb';
import { navBarItems } from "../assets/utils/navBarItems";

function Nav() {

    const [showNav, setShowNav] = useState(false)



  return (
    <div className="w-full">
      <div className="w-full -z-10 h-3/5 absolute overflow-hidden">

      <div className='w-full h-full bg-black/50 z-10 absolute '>

          <div className='mr-0 text-right flex justify-end text-gray-200'> 
            <div className='m-2 h-12 w-12 bg-black/80 rounded-full flex flex-col'>
            {showNav ? <TbCoffeeOff className='m-auto w-full h-full p-2' onClick={()=>setShowNav(!showNav)}/>
                : <TbCoffee className='m-auto w-full h-full p-2' onClick={()=>setShowNav(!showNav)}/>}</div> </div>

           { showNav && <div className="w-11/12 m-auto py-6 px-3 text-xl font-extralight bg-black flex flex-col gap-6"> 
           {navBarItems.map(e=>(
                <div key={e.item} className='underline underline-offset-8 text-gray-200'>{e.item}</div>
           ))}
             </div>
}
        <div className="w-full h-full flex flex-col justify-center items-center">

           

        </div>


      </div>


     {   <div
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
        ></div>}

       

        </div>
      
    </div>
  );
}

export default Nav;
