import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../companents/Header";
import Filme from "../pages/Filme";
import Home from "../pages/Home";
import Erro from "../pages/Erro";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}
