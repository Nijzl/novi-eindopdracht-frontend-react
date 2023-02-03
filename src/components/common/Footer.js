import "../../styles/Footer.css"
import React from "react";

function Footer() {

    const year = new Date().getFullYear();

    return(
        <div className="page-footer">
            <p> TriviApp uses the Open Trivia DataBase for its questions and categories </p>
            <p> © LoNi <i className="fa-solid fa-otter"/>, { year } </p>
        </div>
    );
}

export default Footer;


