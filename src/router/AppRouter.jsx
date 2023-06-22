import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { Ficha } from '../pages/fichas/Ficha';
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Valoracion } from "../pages/fichas/Valoracion";
import { Consolidado } from "../pages/fichas/Consolidado";
import { Index } from "../pages/index/Index";
import { FichasIndex } from "../pages/fichas/FichasIndex";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="index" element={<Index />} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="ficha" element={<Ficha />} />
        <Route path="valoracion" element={<Valoracion />} />
        <Route path="consolidado" element={<Consolidado />} />
        <Route path="fichas" element={<FichasIndex />} />

        <Route path="/" element={<Navigate to='/index'/>} />
      </Routes>
    </>
  )
}
