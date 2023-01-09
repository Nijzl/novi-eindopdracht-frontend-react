import GetAllUsers from "../data/user/get-all-users";
import GetOneUser from "../data/user/get-one-user";
import CreateNewUser from "../data/user/create-new-user";
import UpdateUser from "../data/user/update-user";
import DeleteUser from "../data/user/delete-user";

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



