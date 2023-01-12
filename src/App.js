import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlayQuizAPIPage from "./play-quiz/PlayQuizAPIPage";
import AboutPage from "./pages/AboutPage";
import DemoPage from "./pages/DemoPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import useUser, { UserProvider } from "./data/hooks/use-user";
import LoadingSpinner from "./components/LoadingSpinner";
import QuizzesPage from "./quizzes/QuizzesPage";
import PlayQuizPage from "./play-quiz/PlayQuizPage";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";
import EditQuizPage from "./edit-quiz/EditQuizPage";
import Flashcards from "./pages/Flashcards";

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
                      <Route path="/quizzes" element={ <QuizzesPage/> } />
                      <Route path="/quizzes/play-quiz/:id" element={ <PlayQuizPage/> } />
                      <Route element={ <AuthenticatedRoutes/> }>
                          <Route path={"/quizzes/edit-quiz/:id"} element={ <EditQuizPage/> } > </Route>
                      </Route>
                      <Route path="/api" element={ <PlayQuizAPIPage/> } />
                      <Route path="/flashcards" element={ <Flashcards/> } />
                      <Route path="/demo" element={ <DemoPage/> } />
                      <Route path="*" element={ <PageNotFound/> } />
                  </Routes>
              )}

              <Footer/>
        </>
    );
}

export default ProviderWrappedApp;