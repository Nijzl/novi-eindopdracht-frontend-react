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
                    <Route path='/Recipes' component={Recipes} />
                    <Route path='/Reviews' component={Reviews} />
                    <Route path='/SignUp' component={SignUp} />
                </Routes>
                <Footer/>
            </Router>
        </>
    );
}

export default App;
