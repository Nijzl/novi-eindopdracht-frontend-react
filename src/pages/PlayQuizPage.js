import { useParams } from "react-router-dom";
import Game from "../components/play-quiz/Game";
import LoadingSpinner from "../components/common/LoadingSpinner";
import ErrorMessage from "../components/common/ErrorMessage";
import useQuizOnce from "../data/hooks/use-quiz-once";

function PlayQuizPage() {

    const { id } = useParams();

    const quiz = useQuizOnce(id);

    let contents;
    if (quiz.status === "loading") {
        contents = <LoadingSpinner />;
    } else if (quiz.status === "error") {
        contents = <ErrorMessage> Something went wrong. Please try again! </ErrorMessage>;
    } else if (!quiz.exists) {
        contents = <ErrorMessage>No quiz found!</ErrorMessage>;
    } else {
        contents = <Game quizData={ quiz.data } />;
    }

    return(
        <main>
            { contents }
        </main>
    );

}

export default PlayQuizPage;