import {Box} from "@mui/material"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css'
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {

  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  )
}

export default App
