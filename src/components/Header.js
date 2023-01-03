import {Link} from "react-router-dom";
import "../styles/Header.css";

function Header() {
    return(
        <>
            <header className="page-header">
                <span className="page-header__logo"> Placeholder </span>
                <nav>
                    <Link to="/"> Home </Link> |
                    <Link to="/quiz"> Quiz </Link> |
                    <Link to="/about"> About </Link> |
                    <Link to="/demo"> Demos </Link>
                </nav>
            </header>
        </>
    );
}

export default Header;