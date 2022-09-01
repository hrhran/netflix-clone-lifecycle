import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './Login'
import Home from './Home'
import Layout from './Layout'

const App = () => {
    return (
        <>
            {console.log("App rendered")}
            <Routes>
                <Route path="/login" element={<Login />} />  
                <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}

export default App