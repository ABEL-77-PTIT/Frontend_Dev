import React from "react";
import { Route, Routes } from "react-router-dom";
import Coffee from "../../features/CoffeeShop/pages/Coffee";
import Home from "../../features/Common/Layout/Home";
import MyChannel from "../../features/MyChannel/pages/MyChannel";
import NerdCard from "../../features/NerdCard/pages/NerdCard";
import CitiAlto from "../../features/CitiAlto/pages/CitiAlto";
import BlogsManagement from "../../features/MyBlogs/BlogsManagement";
const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="/*">
                <Route path="" index element={<Home />} />
                <Route path="auth/*">
                    <Route path="login" element={"Login"} />
                    <Route path="register" element={"Register"} />
                    <Route path="forgot_password" element={"ForgotPassword"} />
                    <Route
                        path="recovery_password"
                        element={"RecoveryPassword"}
                    />
                </Route>
                <Route path="my/*">
                    <Route path="nerd_card" element={<NerdCard />} />
                    <Route path="coffee_shop" element={<Coffee />} />
                    <Route path="antube" element={<MyChannel />} />
                    <Route path="real_estate" element={<CitiAlto />} />
                    <Route path="blogs/*" element={<BlogsManagement />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default CommonRoutes;
