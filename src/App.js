import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayQuizAPIPage from "./pages/PlayQuizAPIPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/Footer";
import PageNotFound from "./pages/PageNotFound";
import useUser, { UserProvider } from "./data/hooks/use-user";
import LoadingSpinner from "./components/common/LoadingSpinner";
import QuizzesPage from "./pages/QuizzesPage";
import PlayQuizPage from "./pages/PlayQuizPage";
import AuthenticatedRoutes from "./components/common/AuthenticatedRoutes";
import Flashcards from "./pages/Flashcards";
import Navbar from "./components/common/Navbar";

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

            <Navbar/>

              { userState.isLoading ? (
                  <LoadingSpinner/>
              ) : (
                  <Routes>
                      <Route path="/" exact element={ <HomePage/> } />
                      <Route path="/quizzes" element={ <QuizzesPage/> } />
                      <Route element={ <AuthenticatedRoutes/> }>
                          <Route path="/quizzes/play-quiz/:id" element={ <PlayQuizPage/> } />
                      </Route>
                      <Route element={ <AuthenticatedRoutes/> }>
                            <Route path="/api" element={ <PlayQuizAPIPage/> } />
                      </Route>
                      <Route path="/flashcards" element={ <Flashcards/> } />
                      <Route path="*" element={ <PageNotFound/> } />
                  </Routes>
              )}

              <Footer/>
        </>
    );
}

export default ProviderWrappedApp;