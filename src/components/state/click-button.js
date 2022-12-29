import { useState } from "react";

function ClickButton(){

    const onButtonClick = () => {
        setNumClicks(numClicks + 1);
    }

    const [numClicks, setNumClicks] = useState(0);

    const text = numClicks === 0 ? "You haven't clicked me yet!" : "You've clicked { numClicks } times";

    const buttonStyle = {
        width: "5rem",
        transform: `rotate(&{numClicks * 25}deg)`,
        transition: "all 0.2s"
    };

    return <button style={buttonStyle} onClick={onButtonClick}> { text } </button>;
}

export default ClickButton;