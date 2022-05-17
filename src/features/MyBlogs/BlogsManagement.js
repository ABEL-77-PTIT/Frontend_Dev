import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import TopBar from "./components/topbar/TopBar";

const BlogsManagement = () => {
    return (
        <div>
            <TopBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/write" element={<Write />} />
                <Route path="/settins" element={<Settings />} />
                <Route path="/post/:postId" element={<Single />} />
            </Routes>
        </div>
    );
};

export default BlogsManagement;
