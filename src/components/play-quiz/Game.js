import { useState } from "react";
import { FadeTransition, FadeWrapper } from "../utils/fade-transition";
import Stats from "./Stats";
import TriviaItem from "./TriviaItem";
import EndScreen from "./EndScreen";
import StartScreen from "./StartScreen";

function Game({ quizData }) {
    const [gameState, setGameState] = useState({
        score: 0,
        triviaIndex: 0,
        state: "start",
        startTime: performance.now(),
    });

    const questions = quizData.questions ?? [];
    const { score, triviaIndex, state, startTime } = gameState;
    const questionNumber = triviaIndex + 1;
    const numQuestions = questions.length;
    const playTimeInSeconds = (performance.now() - startTime) / 1000;

    const restartGame = () => {
        setGameState({
            score: 0,
            triviaIndex: 0,
            state: "start",
            startTime: performance.now(),
        });
    };

    const onStart = () => {
        setGameState({
            score: 0,
            triviaIndex: 0,
            state: "running",
            startTime: performance.now(),
        });
    };

    const loadNextQuestion = () => {
        if (triviaIndex >= questions.length - 1) {
            setGameState({ ...gameState, state: "end" });
        } else {
            // Using the spread operator to copy the gameState and override the triviaIndex.
            setGameState({ ...gameState, state: "running", triviaIndex: triviaIndex + 1 });
        }
    };

    const onAnswerSelected = (wasPlayerCorrect) => {
        if (wasPlayerCorrect) {
            setGameState({
                ...gameState,
                score: score + 1,
            });
        }
    };

    let pageContent;
    let pageKey;
    if (state === "start") {
        pageKey = "QuizDetails";
        pageContent = <StartScreen quizData={ quizData } onPlayClick={ onStart } />;
    } else if (state === "end") {
        pageKey = "EndScreen";
        pageContent = (
            <EndScreen
                score={ score }
                bestScore={ triviaIndex + 1 }
                onRetryClick={ restartGame }
                playTime={ playTimeInSeconds }
            />
        );
    } else {
        pageKey = triviaIndex;
        const triviaQuestion = questions[triviaIndex];
        const { correctAnswer, incorrectAnswers, question } = triviaQuestion;
        pageContent = (
            <TriviaItem
                key={ triviaIndex }
                question={ question }
                correctAnswer={ correctAnswer }
                incorrectAnswers={ incorrectAnswers }
                onNextClick={ loadNextQuestion }
                onAnswerSelected={ onAnswerSelected }
            />
        );
    }

    return (
        <>
            <Stats
                score={ score }
                questionNumber={ questionNumber }
                totalQuestions={ numQuestions }
            />
            <FadeWrapper>
                <FadeTransition key={ pageKey }> { pageContent } </FadeTransition>
            </FadeWrapper>
        </>
    );
}

export default Game;