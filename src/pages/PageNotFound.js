import {useLocation} from "react-router-dom";

function PageNotFound(){

    const location = useLocation();

    return(
        <div>
            <h3> Page Not Found </h3>
            <p> At: { location.pathname }</p>
        </div>
    );
}

export default PageNotFound;