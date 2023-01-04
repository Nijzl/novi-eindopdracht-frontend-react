import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuizPage from "./pages/QuizPage";
import AboutPage from "./pages/AboutPage";
import DemoPage from "./pages/DemoPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import useUser, { UserProvider } from "./data/hooks/use-user";
import LoadingSpinner from "./components/LoadingSpinner";
import QuizzesPage from "./quizzes/QuizzesPage";

function ProviderWrappedApp() {
    return (
        <Router>
            <UserProvider>
                <App />
            </UserProvider>
        </Router>
    );
}

function App() {

    const userState = useUser();

    return(
        <>
              <Header/>

              { userState.isLoading ? (
                  <LoadingSpinner/>
              ) : (
                  <Routes>
                      <Route path="/" exact element={ <HomePage/> } />
                      <Route path="/quiz" element={ <QuizPage/> } />
                      <Route path="/quizzes" element={ <QuizzesPage/> } />
                      <Route path="/about" element={ <AboutPage/> } />
                      <Route path="/demo" element={ <DemoPage/> } />
                      <Route path="*" element={ <PageNotFound/> } />
                  </Routes>
              )}

              <Footer/>
        </>
    );
}

export default ProviderWrappedApp;