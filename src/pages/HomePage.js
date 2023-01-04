import ErrorMessage from "../components/ErrorMessage";
import useUser from "../data/hooks/use-user";

function HomePage() {

    const userState = useUser();

    let contents;
    if (userState.isSignedIn) {
        contents = (
            <>
                <p>TODO: put the user's quizzes on this page.</p>
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
            <h1>Welcome to Quizzapp </h1>
            { userState.error && (
                <ErrorMessage> Something went wrong logging you in. Please try again. </ErrorMessage>
            )}
            { contents }
        </main>
    );
}

export default HomePage;