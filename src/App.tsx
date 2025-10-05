import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import './App.css'
import Footer from "./components/Footer";

function App(){
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />

      </Routes>
    <Footer/>
    </>
  )
}

export default App
