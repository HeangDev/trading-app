import React from 'react'
import { Routes, Route } from "react-router-dom";
import MainLayout from './layouts/MainLayout/Index'

import Home from './pages/Home'

const App = () => {
    return (
        <>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </MainLayout>
        </>
    )
}

export default App