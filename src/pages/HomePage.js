import ErrorMessage from "../components/common/ErrorMessage";
import useUser from "../data/hooks/use-user";
import { Link } from "react-router-dom";
import "../styles/HomePage.css";
import CreateNewUser from "../data/user/create-new-user";
import UseUser from "../data/hooks/use-user";
import user from "../data/user/user";

function HomePage() {

    const userState = useUser();

    let contents;
    if (userState.isSignedIn) {
        contents = (
            <>

                <p> You are now signed in <br/> <i className="fa-solid fa-book-open-reader"/> </p>
                <p> What would you like to do? </p>

                <div className="button-column">
                    <Link to="/api">
                        <button className="home-page__button"> GENERATE QUIZ </button>
                    </Link>
                </div>
                <div className="button-column">
                    <Link to="/quizzes">
                        <button className="home-page__button"> QUIZZES LIST </button>
                    </Link>
                </div>
                <div className="button-column">
                    <Link to="/flashcards">
                        <button className="home-page__button"> FLASHCARDS </button>
                    </Link>
                </div>

                <div className="home-page-log">
                    <p> Done for today? </p>
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
                    <p> TriviApp lets you practice your trivia skills: </p>
                    <p> Generate a unique quiz,<br/> select an existing quiz from our database, <br/> or learn more about a specific topic through flashcards </p>
                    <h1> <i className="fa-solid fa-book-atlas"/> </h1>
{/*                    <Link to="/register">
                        <h1> REGISTER </h1>
                    </Link>
                    <h1> Login with email and password</h1>
                    <p> Or </p>*/}
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
{/*            <h1> Welcome to Qui⚡︎⚡︎app </h1>*/}
            <h1> Welcome to TriviApp <i className="fa-solid fa-swatchbook"/> </h1>
            <h2> Expand your knowledge </h2>
            { userState.error && (
                <ErrorMessage> Something went wrong logging you in. Please try again. </ErrorMessage>
            )}
            { contents }
        </div>
    );
}

export default HomePage;