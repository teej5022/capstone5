import React from "react";
import "./Person.css";

const Person = props => (
    <div className="Person" onClick={props.clicked}>
        <h1>{props.name}</h1>

    </div>
);

export default Person;