import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Coffee from '../../features/CoffeeShop/pages/Coffee'
import NerdCard from '../../features/NerdCard/pages/NerdCard'
const CommonRoutes = () => {
  return (
    <Routes>
        <Route path="/*">
            <Route path="" index element={"Home"} />
            <Route path="auth/*">
                <Route path="login" element={"Login"} />
                <Route path="register" element={"Register"} />
                <Route path="forgot-password" element={"ForgotPassword"} />
                <Route path="recovery-password" element={"RecoveryPassword"} />
            </Route>
            <Route path="nerd-card" element={<NerdCard />} />
            <Route path="my-coffee" element={<Coffee />} />
        </Route>
    </Routes>
  )
}

export default CommonRoutes