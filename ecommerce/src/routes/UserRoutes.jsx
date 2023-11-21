import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import UsersPage from '../pages/UsersPage'
import AppLayout from '../layouts/AppLayout/AppLayout'
import PerfilPage from '../pages/PerfilPage'
import CarritoPage from '../pages/CarritoPage'
import HomePage from '../pages/HomePage'

export default function UserRoutes() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />} >
          <Route path="/" element={<HomePage />} />
          <Route path={'perfil'} element={<PerfilPage />} />
          <Route path={'carrito'} element={<CarritoPage />} />
          <Route path={'users'} element={<UsersPage />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  )
}
