import { Route, Routes } from "react-router-dom"
import { Dashboard } from "../pages/dashboard/Dashboard"
import { Ficha } from "../pages/fichas/Ficha"


export const DashboardRouter = () => {
  return (
    <>
      <Routes>
        <Route path="main" element={<Dashboard />} />
        <Route path="dashboard/ficha" element={<Ficha />} />
      </Routes>
    </>
  )
}
