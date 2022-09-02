import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Login from './Login'
import Home from './Home'
import Layout from './Layout'
import Games from './Games/Games'

const App = () => {
    return (
        <>
            {console.log("App rendered")}
            <Routes>
                <Route path="/login" element={<Login />} />  
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />          
                </Route>
                <Route path='/games' element={<Layout />}>
                    <Route index element={<Games />} />          
                </Route>
                
            </Routes>
        </>
    )
}

export default App