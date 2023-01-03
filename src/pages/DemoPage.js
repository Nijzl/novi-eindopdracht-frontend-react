import GetAllUsers from "../components/utils/get-all-users";
import GetOneUser from "../components/utils/get-one-user";
import CreateNewUser from "../components/utils/create-new-user";

function DemoPage() {
    return (
        <>
            <main>
                <h1>My First React App</h1>
                <h2>Firebase User Demos</h2>
                <CreateNewUser/>
                <GetOneUser/>
                <GetAllUsers/>
            </main>
        </>
    );
}

export default DemoPage;



