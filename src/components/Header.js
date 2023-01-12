import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Header.css";

function Header() {
    return(
        <>
            <header className="page-header">
                <span className="page-header__logo"> Qui⚡︎⚡︎app </span>
                <nav>
                    <Link to="/"> HOME </Link> |
                    <Link to="/quizzes"> QUIZ LIST </Link> |
                    <Link to="/api"> API QUIZ </Link> |
                    <Link to="/flashcards"> FLASHCARDS </Link> |
                    <Link to="/demo"> DEMOS </Link>
                </nav>
            </header>
        </>
    );
}

export default Header;


/*function Header(){

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    /!* IF THE SCREEN GETS TO SMALL THE BUTTON DISAPPEARS *!/
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    /!* ACTUALLY HIDES BUTTON WHEN SCREEN GETS TOO SMALL*!/
    useEffect( () => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={ closeMobileMenu }>
                        Quizzapp
                    </Link>
                    <div className="menu-icon" onClick={ handleClick }>
                        <i className={ click ? "fas fa-times" : "fas fa-bars" }/>
                    </div>
                    <ul className={ click ? "nav-menu active" : "nav-menu" }>
                        <li className="nav-item">
                            <Link to="/quizzes" className="nav-links" onClick={ closeMobileMenu }>
                                QUIZZES |
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/quiz" className="nav-links" onClick={ closeMobileMenu }>
                                RANDOM |
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/demo" className="nav-links" onClick={closeMobileMenu}>
                                PH2 |
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );

}

export default Header;*/

