import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"
import NotFound from "./NotFound"
import Nav from "./Components/Nav"
import Faq from "./Pages/Faq"
import Usuarios from "./Pages/Usuarios"


export default function Router() {
  return (

    <BrowserRouter>
      
      <Nav />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/usuarios" element={<Usuarios />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/faq" element={<Faq />} />

        </Routes>
    
    </BrowserRouter>


    
  )
}
