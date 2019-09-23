import React from "react";
import { Link } from "react-router-dom";


export function Navbar() {
    return (
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/Lord">Lords</Link>
            <Link to="/Fellowship">Fellowship</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
        </div>

    );
};

