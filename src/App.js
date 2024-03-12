import React from 'react'
import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout/Index'
import LoginLayout from './layouts/LoginLayout/Index';

import Home from './pages/Home'
import Markets from './pages/Markets';

import Login from './pages/Login';
import Register from './pages/Register'

const App = () => {
    return (
        <>
            {/* <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/market" element={<Markets />} />
                </Routes>
            </MainLayout> */}

            <LoginLayout>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </LoginLayout>
        </>
    )
}

export default App