import React from 'react';

function Person(props) {
   // console.log(props.person[0])

    return (
        <div>
            {props.person.map((perp, index) =>{ 
                return(
                <div key={index}>
                    <h2>{perp.title}</h2>
                    <h3>{perp.body}</h3>
                    <p>{perp.name}</p>
                    <p>{perp.email}</p>
                    <p>{perp.role}</p>

                </div>
                )
            })}
        </div>
    )
}


export default Person;