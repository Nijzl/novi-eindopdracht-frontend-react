import { useParams } from "react-router-dom";
import { useState } from "react";
import { getNewQuizId, getServerTimestamp } from "../../data/Firebase";
import useQuizOnce from "../../data/hooks/use-quiz-once";
import useUser from "../../data/hooks/use-user";
import QuizForm from "./QuizForm";
import LoadingSpinner from "../common/LoadingSpinner";

function EditQuizPage() {

    const { id } = useParams();
    const isNew = id === "new";
    const [quizId] = useState(() => (isNew ? getNewQuizId() : id));
    const userState = useUser();
    const quiz = useQuizOnce(quizId);

    const saveQuiz = (newQuizData) => {
        const ownerId = userState.userId;
        const ownerName = userState.user.displayName;
        const lastModifiedAt = getServerTimestamp();
        const data = { ...newQuizData, ownerId, ownerName, lastModifiedAt };
        if (!quiz.exists) data.createdAt = lastModifiedAt;
        quiz.set(data);
    }

    const deleteQuiz = () => {
        quiz.delete();
    }

    if (quiz.status === "loading"){
        return <LoadingSpinner/>
    }

    if (quiz.status === "success" && quiz.exists && quiz.data.ownerId !== userState.userId){
        return (
            <main>
                <h1> EDIT QUIZ </h1>
                <p> You don't have permission to edit "{ quiz.data.title }" </p>
            </main>
        );
    }

    let message;
    if (quiz.status === "deleting") message = <p> DELETING... </p>
    else if (quiz.status === "deleted") message = <p> DELETE SUCCESSFUL </p>
    else if (quiz.status === "error") message = <p> Something went wrong. Please try again </p>

    return (
        <main>
            <h1> EDIT QUIZ </h1>
            { message }
            <QuizForm
                initialData={ quiz.data }
                onSave={ saveQuiz }
                onDelete={ deleteQuiz }
                isSaving={ quiz.status === "updating" }
            />
        </main>
    );
}

export default EditQuizPage;