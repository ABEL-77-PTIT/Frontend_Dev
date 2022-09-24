import React from "react";
import { Route, Routes } from "react-router-dom";
import Coffee from "../../features/CoffeeShop/pages/Coffee";
import Home from "../../features/Common/Layout/Home";
import MyChannel from "../../features/MyChannel/pages/MyChannel";
import NerdCard from "../../features/NerdCard/pages/NerdCard";
import BlogsManagement from "../../features/MyBlogs/BlogsManagement";
import NotFoundPage from "../../features/Error/components/NotFound";
import CitiAltoManagement from "../../features/CitiAlto/CitiAltoManagement";
import MainPage from "../../features/PetEcommerce/client/pages/MainPage";
import SkillineManagement from "../../features/Skilline/SkillineManagement";

const CommonRoutes = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="" index element={<Home />} />
                <Route path="auth">
                    <Route path="login" element={"Login"} />
                    <Route path="register" element={"Register"} />
                    <Route path="forgot_password" element={"ForgotPassword"} />
                    <Route
                        path="recovery_password"
                        element={"RecoveryPassword"}
                    />
                </Route>
                <Route path="my">
                    <Route path="nerd_card" element={<NerdCard />} />
                    <Route path="coffee_shop" element={<Coffee />} />
                    <Route path="antube" element={<MyChannel />} />
                    <Route
                        path="real_estate/*"
                        element={<CitiAltoManagement />}
                    />
                    <Route path="blogs" element={<BlogsManagement />} />
                </Route>
                <Route path="pet_shop" element={<MainPage />} />
                <Route path="skilline" element={<SkillineManagement />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
};

export default CommonRoutes;
