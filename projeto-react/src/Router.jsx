import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"
import NotFound from "./NotFound"
import Nav from "./Components/Nav"
import Saq from "./Components/Saq"


export default function Router() {
  return (

    <BrowserRouter>
      
      <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/saq" element={<Saq />} />

        </Routes>
    
    </BrowserRouter>


    
  )
}
