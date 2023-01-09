import ErrorMessage from "../components/ErrorMessage";
import useUser from "../data/hooks/use-user";
import {Link} from "react-router-dom";

function HomePage() {

    const userState = useUser();

    let contents;
    if (userState.isSignedIn) {
        contents = (
            <>
                <p>TODO: put the user's quizzes on this page.</p>
                <Link to="quizzes/edit-quiz/new">
                    <button> NEW QUIZ</button>
                </Link>
                <button onClick={ userState.signOut } disabled={ userState.isLoading }>
                    { userState.isLoading ? "SIGNING OUT..." : "SIGN OUT" }
                </button>
            </>
        );
    } else {
        contents = (
            <>
                <p> This app lets you create, share, and play quizzes on any topic. </p>
                <p> Sign in with your Google account below to get started. </p>
                <button onClick={ userState.signIn } disabled={ userState.isLoading }>
                    { userState.isLoading ? "SIGNING IN..." : "SIGN IN" }
                </button>
            </>
        );
    }

    return (
        <main>
            <h1>Welcome to Qui⚡︎⚡︎app </h1>
            <h2> Your handy dandy quizz app </h2>
            { userState.error && (
                <ErrorMessage> Something went wrong logging you in. Please try again. </ErrorMessage>
            )}
            { contents }
        </main>
    );
}

export default HomePage;