import { useState } from "react";
import { db } from "../Firebase";

function CreateNewUser() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onClick = async () => {
        try {
            const docRef = await db.collection("users").add({
                firstName,
                lastName,
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
        <div>
            <h3> Create User </h3>
            <div>
                <label>
                    First name:{ " " }
                    <input type="text" value={ firstName } placeholder="Your name" onChange={ (e) => setFirstName(e.target.value) }/>
                </label>
                <label>
                    Last name:{ " " }
                    <input type="text" value={ lastName } placeholder="Your surname" onChange={ (e) => setLastName(e.target.value) }/>
                </label>
            </div>
            <div>
                <button onClick={ onClick }> Create User </button>
            </div>
        </div>
    );
}

export default CreateNewUser;