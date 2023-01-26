import { db } from "../Firebase";
import quizzes from "./sample-quizzes";

async function loadSampleData() {
    console.log("Loading sample quizzes into firestore...");

    for (let quizData of quizzes) {
        const { id, data } = quizData;
        try {
            await db.collection("quizzes").doc(id).set(data);
        } catch (error) {
            console.error(error);
            console.error("Could not load sample data!");
            return;
        }
    }

    console.log("Done loading sample quizzes!");
}

export default loadSampleData;