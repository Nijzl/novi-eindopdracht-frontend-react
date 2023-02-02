import ErrorMessage from "../components/common/ErrorMessage";
import useUser from "../data/hooks/use-user";
import { Link } from "react-router-dom";
import HeroSection from "../components/common/HeroSection";
import "../styles/HomePage.css";
import Cards from "../components/common/Cards";

function HomePage() {

    const userState = useUser();

    let contents;
    if (userState.isSignedIn) {
        contents = (
            <>
                <HeroSection/>
                <Cards/>

{/*                <p> You are now signed in <br/> <i className="fa-solid fa-book-open-reader"/> </p>
                <p> What would you like to do? </p>

                <div className="button-column">
                    <Link to="/api">
                        <button className="home-page__button"> GENERATE QUIZ </button>
                    </Link>
                    <Link to="/quizzes">
                        <button className="home-page__button"> QUIZZES LIST </button>
                    </Link>
                    <Link to="/flashcards">
                        <button className="home-page__button"> FLASHCARDS </button>
                    </Link>
                </div>*/}

                <div className="home-page-log">
                    <h2> Done for now? </h2>
                    <div className="button-log">
                        <button className="home-page__button" onClick={ userState.signOut } disabled={ userState.isLoading }>
                            { userState.isLoading ? "SIGNING OUT..." : "SIGN OUT" }
                        </button>
                    </div>
                </div>
            </>
        );
    } else {
        contents = (
            <>
                <div className="home-page-log">
                    <h1> Welcome to TriviApp <i className="fa-solid fa-swatchbook"/> </h1>
                    <h2> Expand your knowledge </h2>
                    <p> TriviApp lets you practice your trivia skills: </p>
                    <p> Generate a unique quiz,<br/> select an existing quiz from our database, <br/> or learn more about a specific topic through flashcards </p>
                    <h1> <i className="fa-solid fa-book-atlas"/> </h1>
                    <p> Sign in with your Google account </p>
                    <div className="button-log">
                        <button className="home-page__button" onClick={ userState.signIn } disabled={ userState.isLoading }>
                            { userState.isLoading ? "SIGNING IN..." : "SIGN IN" }
                        </button>
                    </div>
                </div>

            </>
        );
    }

    return (
        <div>
            { userState.error && (
                <ErrorMessage> Something went wrong logging you in. Please try again. </ErrorMessage>
            )}
            { contents }
        </div>
    );
}

export default HomePage;