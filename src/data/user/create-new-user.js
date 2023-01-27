import { useState } from "react";
import { db } from "../Firebase";

function CreateNewUser() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const onClick = async () => {
        try {
            const docRef = await db.collection("users").add({
                userName,
                password,
                isOnline: true,
                highScore: 0,
                topics: [],
            });
/*            console.log(`Successfully added new user at ${ docRef.id }`);*/
            alert("Successfully added new user");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="create-new-user-container">
            <h1> REGISTER </h1>
            <div className="create-new-user-input">
                <label>
                    Username:{ " " }
                    <input type="text" value={ userName } placeholder="Your username" onChange={ (e) => setUserName(e.target.value) }/>
                </label>
            </div>
            <div className="create-new-user-input">
                <label>
                    Password:{ " " }
                    <input type="password" value={ password } placeholder="Your password" onChange={ (e) => setPassword(e.target.value) }/>
                </label>
            </div>
            <div className="create-new-user-btn">
                <button onClick={ onClick }> REGISTER </button>
            </div>
        </div>
    );
}

export default CreateNewUser;