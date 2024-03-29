import React, { useState, useEffect } from 'react';
import "../../styles/Navbar.css"
import { Link } from 'react-router-dom';

function Navbar(){

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


/*    const [button, setButton] = useState(true);
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

    window.addEventListener("resize", showButton);*/

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TriviApp <i className="fa-solid fa-swatchbook"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/quizzes" className="nav-links" onClick={closeMobileMenu}>
                                QUIZ LIST
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/api" className="nav-links" onClick={closeMobileMenu}>
                                API QUIZ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/flashcards" className="nav-links" onClick={closeMobileMenu}>
                                FLASHCARDS
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;