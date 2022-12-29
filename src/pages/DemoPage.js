import ClickButton from "../components/state/click-button";
import WelcomeMessage from "../components/props/welcome-message";
import SpeakButton from "../components/props/speak-button";
import ChatMessage from "../components/props/chat-message";
import SpeakForm from "../components/state/speak-form";

function DemoPage(){
    return (
        <>
            <main>
                <h1>My First React App</h1>
    
                <h2> Stateful Buttons </h2>
                <ClickButton/>

                <h2> Speak Form </h2>
                <SpeakForm/>

                <h2> Welcome </h2>
                {/!* name and greeting become properties on an object passed in to WelcomeMessage *!/}
                <WelcomeMessage name="Mike" greeting="Hello" />
                <WelcomeMessage name="Callie" greeting="Howdy" />
                <WelcomeMessage name="Class" greeting="Welcome" />

                <h2> Buttons </h2>
                <SpeakButton message="Hello there!"/>
                <SpeakButton message="Very fast!" rate={3} pitch={2}/>

                <h2> Chat </h2>
                <ChatMessage message="Yo, how's React?" userName="Anchor" date="01/01/2001"/>
                <ChatMessage message="Preferred the old version" userName="Billy" date="01/01/2001"/>
                <ChatMessage message="Big mood." userName="Anchor" date="01/01/2001"/>

                <h2> Social </h2>
            </main>
        </>
    );
}

export default DemoPage;



