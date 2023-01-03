import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import AboutPage from "./pages/AboutPage";
import DemoPage from "./pages/DemoPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import useUser from "./data/hooks/use-user";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {

    const userState = useUser();

    return(
        <>
          <Router>
              <Header/>
              { userState.isLoading ? (
                  <LoadingSpinner/>
              ) : (
                  <Routes>
                      <Route path="/" exact element={ <HomePage/> } />
                      <Route path="/quiz" element={ <QuizPage/> } />
                      <Route path="/about" element={ <AboutPage/> } />
                      <Route path="/demo" element={ <DemoPage/> } />
                  </Routes>
              )}
              <Footer/>
          </Router>
        </>
    );
}

export default App;