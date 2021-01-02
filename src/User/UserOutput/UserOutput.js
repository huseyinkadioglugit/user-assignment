import React from 'react';

const userOutput = (props) => {

    return (
        <div>
            <p>First paragraph! from --- {props.username}</p>
            <p>Second paragraph!! --- {props.username}</p>
        </div>
    )

}

export default userOutput;

