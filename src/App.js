import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from './pages/Recipes';
import Reviews from './pages/Reviews';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact element = {Home} />
                    <Route path='../pages/Recipes' element = { Recipes } />
                    <Route path='../pages/Reviews' element = { Reviews } />
                    <Route path='../pages/Login' element = { Login }/>
                    <Route path='../pages/Register' element = { Register } />
                </Routes>
                <Home/>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
