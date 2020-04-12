import React, { useState, useEffect } from 'react';

const Home = () => {
    const { classes, url } = props;
    let [clicks, setClicks] = useState(0);

    const submit = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 1);
    }
    return (
        <React.Fragment>
            <p>Hi there HELLO!</p>
            <p>click count:{clicks}</p>
            <button onClick={submit} data-something="Default">
                Default</button>

        </React.Fragment>


    );
}
export default Home;
