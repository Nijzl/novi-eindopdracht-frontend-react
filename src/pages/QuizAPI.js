import QuizStats from "../components/QuizStats";
import TriviaItem from "../components/TriviaItem";
import EndScreen from "../components/EndScreen";
import { useState } from "react";
import { FadeTransition, FadeWrapper } from "../components/utils/fade-transition";

function QuizAPI({ triviaData }) {

    const [gameState, setGameState] = useState({
        score: 0,
        triviaIndex: 0,
        isGameOver: false,
        startTime: performance.now(),
    });

    const { score, triviaIndex, isGameOver, startTime } = gameState;
    const questionNumber = triviaIndex + 1;
    const numQuestions = triviaData.length;
    const playTimeInSeconds = (performance.now() - startTime) / 1000;

    const restartGame = () => {
        setGameState({
            score: 0,
            triviaIndex: 0,
            isGameOver: false,
            startTime: performance.now(),
        });
    };

    const loadNextQuestion = () => {
        if (triviaIndex >= triviaData.length - 1) {
            setGameState({ ...gameState, isGameOver: true });
        } else {
            // Using the spread operator to copy the gameState and override the triviaIndex.
            setGameState({ ...gameState, triviaIndex: triviaIndex + 1 });
        }
    };

    const onAnswerSelected = (wasPlayerCorrect, difficulty) => {
/*        const pointValue = convertDifficultyToPoints(difficulty);*/
        if (wasPlayerCorrect) {
            setGameState({
                ...gameState,
                score: score + 1 /*pointValue*/,
            });
        }
    };

    let pageContent;
    let pageKey;
    if (isGameOver) {
        pageKey = "EndScreen";
        pageContent = (
            <EndScreen
                score={ score }
                bestScore={ 0 }
                onRetryClick={ restartGame }
                playTime={ playTimeInSeconds }
            />
        );
    } else {
        pageKey = triviaIndex;
        const triviaQuestion = triviaData[triviaIndex];
        const { correct_answer, incorrect_answers, question, difficulty } = triviaQuestion;
        pageContent = (
            <TriviaItem
                key={ triviaIndex }
                question={ question }
                difficulty={ difficulty }
                correctAnswer={ correct_answer }
                incorrectAnswers={ incorrect_answers }
                onNextClick={ loadNextQuestion }
                onAnswerSelected={ onAnswerSelected }
            />
        );
    }

    return (
        <>
            <QuizStats
                score={ score }
                questionNumber={ questionNumber }
                totalQuestions={ numQuestions } />
            <FadeWrapper>
                <FadeTransition key={ pageKey }> { pageContent } </FadeTransition>
            </FadeWrapper>
        </>
    );
}

export default QuizAPI;