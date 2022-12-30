import {useEffect, useState} from "react";
import { db } from "../../data/Firebase";
import LoadingSpinner from "../LoadingSpinner";
import errorMessage from "../ErrorMessage";
import ErrorMessage from "../ErrorMessage";
import User from "./user";

function GetAllUsers() {
    const [queryState, setQueryState] = useState({
        isLoading: true,
        errorMessage: "",
        docSnapshots: null,
    });

    useEffect(() => {
        async function getAllUsers() {
            try {
                setQueryState({ isLoading: true, errorMessage: "", docSnapshots: null });
                const snapshot = await db.collection("users").get();
                const docSnapshots = snapshot.docs;
                setQueryState({ isLoading: false, errorMessage: "", docSnapshots });
            } catch (err) {
                setQueryState({
                    isLoading: false,
                    errorMessage: "Could not connect to database. Please try again.",
                    docSnapshots: null,
                });
                console.error(err);
            }
        }

        getAllUsers();
    }, []);

    const { isLoading, errorMessage, docSnapshots } = queryState;

    let contents;
    if (isLoading) contents = <LoadingSpinner />;
    else if (errorMessage) contents = <ErrorMessage>{errorMessage}</ErrorMessage>;
    else contents = docSnapshots.map((doc) => <User key={doc.id} data={doc.data()} />);

    return (
        <div>
            <h3>Read All Users</h3>
            {contents}
        </div>
    );
}

export default GetAllUsers;