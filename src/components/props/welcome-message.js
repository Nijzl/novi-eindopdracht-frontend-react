import "../../styles/welcome-message.css";

function WelcomeMessage(props){

    const {name, greeting} = props;

    return(
      <p className="welcome-message">
          {greeting}, {name}!
      </p>
    );
}

export default WelcomeMessage;