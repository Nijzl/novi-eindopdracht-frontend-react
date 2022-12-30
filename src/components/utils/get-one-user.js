import { useState } from "react";
import { db } from "../../data/Firebase";
import LoadingSpinner from "../LoadingSpinner";
import ErrorMessage from "../ErrorMessage";

function GetOneUser(){

    const [queryState, setQueryState] = useState({
        isLoading: false,
        errorMessage: "",
        docSnapshot: null
    });

    const [userId, setUserId] = useState("");

    const onClick = async () => {
        try{
            setQueryState({ isLoading: true, errorMessage: "", docSnapshot: null })
            const docSnapshot = await db.collection("users").doc(userId).get();

            if(!docSnapshot.exists){
                console.log(`No user found for id: ${ userId } `)
            } else{
                console.log("User found:");
                console.log(docSnapshot.id);
                console.log(docSnapshot.data());
            }
        } catch (err){
            setQueryState({ isLoading: false, errorMessage: "Could not connect to database", docSnapshot: null })
            console.error(err);
        }
    };

    const { isLoading, errorMessage, docSnapshot } = queryState;
    let contents
    if(isLoading) contents = <LoadingSpinner/>;
    else if (errorMessage) contents = <ErrorMessage> { errorMessage } </ErrorMessage>;
    else if (docSnapshot === null) contents = <p> Search for a user </p>;
    else if (!docSnapshot.exists) contents = <p> No user found </p>;
    else contents = <p> {docSnapshot.id} </p>;

    return(
        <div>
            <h3> Find specific user </h3>
            <label>
                USER ID:
                <input
                    type="text"
                    value={ userId }
                    onChange={e => setUserId(e.target.value)}/>
            </label>
            <button onClick={ onClick }> Get User </button>
        </div>
    );
};

export default GetOneUser;