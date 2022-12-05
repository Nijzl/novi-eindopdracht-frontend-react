import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Recipes from './components/pages/Recipes';
import Reviews from './components/pages/Reviews';
import SignUp from './components/pages/SignUp';
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
                    <Route path='../components/pages/SignUp' component={SignUp} />
                </Routes>
                <Home/>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
