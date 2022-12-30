import {  useEffect, useState } from "react";
import he from "he";

function useGetTriviaData(amount= 10, difficulty= ""){

    const [quizFetch, setQuizFetch] = useState({
        isLoading: true,
        errorMessage: "",
        data: null
    });

    /* EFFECT ONLY RUNS ON MOUNT */
    useEffect(() => {
        async function getQuiz(){
            try{
                console.log("Fetching!")

                const params = new URLSearchParams({ amount });
                if (difficulty !== "") params.append("difficulty", difficulty);
                const url = `https://opentdb.com/api.php?${params.toString()}`;

                console.log(url);

                const response = await fetch(url);

                if(!response.ok){
                    throw new Error(`Something went wrong, server responded with ${ response.status }`);
                }

                const json = await response.json();
                const { response_code, results } = json;

                if (response_code === 1){
                    throw new Error("Bad API request - no results!");
                } else if (response_code === 2){
                    throw new Error("Bad API request - invalid parameter!");
                }

                /*DECODES THE HTML ELEMENTS IN THE QUESTION AND ANSWERS*/
                const decodedResults = results.map((item) => {
                    return{
                        ...item,
                        question: he.decode(item.question),
                        correct_answer: he.decode(item.correct_answer),
                        incorrect_answers: item.incorrect_answers.map(incorrect => he.decode(incorrect))
                    };
                });

                /*SUCCESSFULLY PASSED ERROR CHECKS*/
                setQuizFetch({
                    isLoading: false,
                    errorMessage: "",
                    data: decodedResults
                });
            } catch (err) {
                /* GENERIC ERROR MESSAGE */
                setQuizFetch({
                    isLoading: false,
                    errorMessage: "Something went wrong, try again later!",
                    data: null
                });
                /* MORE SPECIFIC ERROR IN CONSOLE*/
                console.error(err);
            }
        }

        getQuiz();

        /* TO DO: CLEAN UP IF USER LEAVES PAGE BEFORE FETCH FINISHES RUNNING */

    }, [amount]);

    const { isLoading, errorMessage, data } = quizFetch;

    return [isLoading, errorMessage, data];
}

export default useGetTriviaData;