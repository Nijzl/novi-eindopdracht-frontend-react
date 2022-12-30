import { db } from "../../data/Firebase";

function GetAllUsers(){

    const onClick = async () => {
        try {
            const snapshot = await db.collection("users").where("isOnline", "==", true).get();
            console.log(`Found ${snapshot.size}x user(s).`);
            const docs = snapshot.docs;
            docs.forEach((docSnapshot) => {

                // Challenge:
                const id = docSnapshot.id;
                const data = docSnapshot.data();
                const { firstName, lastName, highScore } = data;
                console.log(`
                User with ID: ${id}
                ---
                Name: ${firstName} ${lastName}
                High score: ${highScore}
                `);
            });
        } catch (err) {
            console.error(err);
        }
    }

    return(
        <div>
            <h3> See users: </h3>
            <button onClick={ onClick }> read users </button>
        </div>
    );
};

export default GetAllUsers;