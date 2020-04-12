import React, { useState, useEffect } from 'react';

export default function Survey(props) {
    const { classes, url } = props;
    let [clicks, setClicks] = useState(0);

    const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 1);
    }
    return (
        <React.Fragment>
            <p>Hi THERE HELLO!</p>
            <p>click count:{clicks}</p>
            <button onClick={doSomething} data-something="Default">
                Default</button>

        </React.Fragment>


    );
}
