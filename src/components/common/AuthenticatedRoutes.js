import { Link, Outlet } from "react-router-dom";
import UseUser from "../../data/hooks/use-user";

function NotLoggedInContent() {
    return (
        <main>
            <h1>Not Logged In</h1>
            <p>
                Sorry! You need to be logged in to access this page.<br/>
                Head to the <Link to="/">home page</Link>
            </p>
        </main>
    );
}

const AuthenticatedRoutes = () => {

    const userState = UseUser();
    let auth = userState.isSignedIn;

    return(
        auth ? <Outlet/> : <NotLoggedInContent/>
    );
}

export default AuthenticatedRoutes;