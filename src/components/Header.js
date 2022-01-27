import React from "react";
import trollface from "./images/trollface.png";

export default function Header(){
    return(
        <div className="header">
            <img className="header--image" src={trollface}></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </div>
    )
}