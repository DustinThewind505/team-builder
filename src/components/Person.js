import React from "react";
import "./Person.css";

function Person(props) {


    return (
        <div>
            <h1>The Team</h1>
            {props.info.map((info, index) => (
                <div key={index} className="card">
                    <h2>Name: {info.name}</h2>
                    <p>Email: {info.email}</p>
                    <p>Role: {info.role}</p>
                    <p>Music: {info.music}</p>
                </div>
            ))}
        </div>
    )
}

export default Person;
