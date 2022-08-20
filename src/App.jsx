import Nav from "./components/Nav";
import About from "./components/About";
import Img1 from "./assets/utils/Img1";
import Contact from "./components/Contact";

function App() {
  

  return (
    <div className=" min-h-screen bg-gray-100 w-full absolute -z-20">
    <Nav/>
    <About/>
    <Img1/>
    <Contact/>   
    </div>
  )
}

export default App
