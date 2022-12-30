import Quiz from "./Quiz";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";
import useGetTriviaData from "../helpers/use-get-trivia-data";

function QuizPage(){

    const [isLoading, errorMessage, data] = useGetTriviaData(5, "easy");

    let contents;
    if (isLoading) contents = <LoadingSpinner/>;
    else if (errorMessage !== "") contents = <ErrorMessage> { errorMessage } </ErrorMessage>;
    else contents = <Quiz triviaData={ data }/>;

    return(
        <main>
            { contents }
        </main>
    );
}

export default QuizPage;