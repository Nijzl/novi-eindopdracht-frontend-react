import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from './pages/Recipes';
import Reviews from './pages/Reviews';
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' exact component={Home} />
                    <Route path='../components/pages/Recipes' component={Recipes} />
                    <Route path='../components/pages/Reviews' component={Reviews} />
                    <Route path='../components/pages/Register' component={Register} />
                </Routes>
                <Home/>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
