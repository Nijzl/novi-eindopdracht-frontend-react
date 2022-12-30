import GetAllUsers from "../components/utils/get-all-users";
import GetOneUser from "../components/utils/get-one-user";

function DemoPage(){
    return (
        <>
            <main>
                <h1>My First React App</h1>
                <h2>Firebase User Demos</h2>
                <GetAllUsers />
                <GetOneUser />
            </main>
        </>
    );
}

export default DemoPage;



