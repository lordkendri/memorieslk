import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import PostDetails from './components/PostDetails/PostDetails';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = ()=>{
    const user = JSON.parse(localStorage.getItem('profile'))
    const shouldRedirect = true;
    return(<BrowserRouter>
        <Container maxidth="lg">
            <Navbar />
            <Routes>
                <Route path="/"  element={shouldRedirect &&  <Navigate replace to="/posts" />} />
                <Route path="/posts" element={<Home/>} />
                <Route path="/posts/search" element={<Home/>} />
                <Route path="/posts/:id" element={<PostDetails/>} />
                <Route path="/auth" element={!user ? <Auth/> : <Navigate replace to="/posts"/>} />
            </Routes>
        </Container>
    </BrowserRouter>)
};

export default App;