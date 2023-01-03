import { useState } from "react";
import { db } from "../../data/Firebase";

function DeleteUser() {
    const [userId, setUserId] = useState("");

    const onClick = async () => {
        try {
            await db.collection("users").doc( userId ).delete();
/*            console.log(`Successfully delete user ${ userId }.`);*/
            alert("Successfully deleted user");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h3> Delete User </h3>
            <label>
                User ID: <input type="text" value={ userId } onChange={ (e) => setUserId(e.target.value) }/>
            </label>
            <button onClick={ onClick }> Delete User </button>
        </div>
    );
}

export default DeleteUser;