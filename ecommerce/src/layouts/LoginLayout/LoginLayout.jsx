import React from 'react'
import { Outlet } from 'react-router-dom'

const stylesLayout = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
}

export default function LoginLayout() {
  return (
    <div style={stylesLayout}>
      <Outlet />
    </div>
  )
}
