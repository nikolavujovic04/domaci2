import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Gallery from "./pages/Gallery";
import './App.css'
import Footer from "./components/Footer";

function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
