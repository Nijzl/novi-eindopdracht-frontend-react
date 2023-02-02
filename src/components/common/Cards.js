import CardItem from "./CardItem";
import "../../styles/Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1> What would you like to do today? </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="../assets/images/questionmarks-bubbles.png"
                            text="Play a game from our quiz list"
                            label="QUIZ LIST"
                            path="/quizzes"
                        />
                        <CardItem
                            src="../assets/images/questionmarks-blocks.png"
                            text="Generate a unique quiz"
                            label="API QUIZ"
                            path="/api"
                        />
                        <CardItem
                            src="../assets/images/questionmarks-cards.png"
                            text="Practice your skills through low-stakes flashcards"
                            label="FLASHCARDS"
                            path="/flashcards"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;