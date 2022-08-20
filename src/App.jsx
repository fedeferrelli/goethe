import Nav from "./components/Nav";
import About from "./components/About";
import Img1 from "./assets/utils/Img1";
import Map from "./components/Map";


function App() {
  

  return (
    <div className=" min-h-screen bg-gray-100 w-full absolute -z-20">
    <Nav/>
    <About/>
  
    <Img1/>
    <Map/>   
    </div>
  )
}

export default App
