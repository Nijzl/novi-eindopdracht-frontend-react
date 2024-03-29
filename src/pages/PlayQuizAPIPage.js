import GameAPI from "../components/play-quiz/GameAPI";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorMessage from "../components/common/ErrorMessage";
import useGetTriviaData from "../components/hooks/use-get-trivia-data";

function PlayQuizAPIPage() {

    const [isLoading, errorMessage, data] = useGetTriviaData(10, "");

    let contents;
    if (isLoading) contents = <LoadingSpinner/>;
    else if (errorMessage !== "") contents = <ErrorMessage> { errorMessage } </ErrorMessage>;
    else contents = <GameAPI triviaData={ data }/>;

    return(
        <main>
            { contents }
        </main>
    );
}

export default PlayQuizAPIPage;