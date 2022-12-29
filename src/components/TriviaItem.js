import "../styles/TriviaItem.css";

function TriviaItem({ correctAnswer, incorrectAnswers, question, onNextClick }){
    return(
        <div>
            <p className="trivia-item__question"> {question} </p>
            <ul className="trivia-item__answers">
                <li>
                    <button className="trivia-item__button"> { correctAnswer } </button>
                </li>
                <li>
                    <button className="trivia-item__button"> { incorrectAnswers[0] } </button>
                </li>
                <li>
                    <button className="trivia-item__button"> { incorrectAnswers[1] } </button>
                </li>
                <li>
                    <button className="trivia-item__button"> { incorrectAnswers[2] } </button>
                </li>
            </ul>
            <button className="trivia-item__button trivia-item__next-button" onClick={ onNextClick }> Next </button>
        </div>
    );
}

export default TriviaItem;