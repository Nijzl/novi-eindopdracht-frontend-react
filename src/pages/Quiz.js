import QuizStats from "../components/QuizStats";
import TriviaItem from "../components/TriviaItem";
import EndScreen from "../components/EndScreen";
import { useState } from "react";
import triviaData from "../helpers/trivia-data";

function Quiz(){

    const [gameState, setGameState] = useState({
        score: 0,
        triviaIndex: 0,
        isGameOver: false
    });

    const { score, triviaIndex, isGameOver } = gameState;
    const questionNumber = triviaIndex + 1;
    const numQuestions = triviaData.length;

    const restartGame = () => {
        setGameState({
            score: 0,
            triviaIndex: 0,
            isGameOver: false
        })
    };

    const loadNextQuestion = () => {
        /*Using spread operator to cupy the gameState and override the triviaIndex*/
        setGameState({
            ...gameState,
            triviaIndex: triviaIndex + 1
        })
    };

    let pageContent;
    if(isGameOver){
        pageContent = <EndScreen score={ score } bestScore={0} onRetryClick={ restartGame() } />;
    } else{
        const triviaQuestion = triviaData[triviaIndex];
        const {correct_answer, incorrect_answers, question} = triviaQuestion;
        pageContent = <TriviaItem
            question={ question }
            correctAnswer={ correct_answer }
            incorrectAnswers={ incorrect_answers}
            onNextClick={ loadNextQuestion }
        />;
        }

    return(
        <>
            <QuizStats score={ score } questionNumber={ questionNumber } totalQuestions={ numQuestions }/>
            { pageContent }
        </>
    );
}

export default Quiz;