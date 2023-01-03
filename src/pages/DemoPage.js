import GetAllUsers from "../components/utils/get-all-users";
import GetOneUser from "../components/utils/get-one-user";
import CreateNewUser from "../components/utils/create-new-user";
import UpdateUser from "../components/utils/update-user";
import DeleteUser from "../components/utils/delete-user";

function DemoPage() {
    return (
        <>
            <main>
                <h1>My First React App</h1>
                <h2>Firebase User Demos</h2>
                <UpdateUser/>
                <CreateNewUser/>
                <DeleteUser/>
                <GetOneUser/>
                <GetAllUsers/>
            </main>
        </>
    );
}

export default DemoPage;



