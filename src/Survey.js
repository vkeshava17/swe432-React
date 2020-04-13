import React, { useState, useEffect } from 'react';

export default function Survey(props) {
    const { classes, url } = props;
    let [clicks, setClicks] = useState(0);

    const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 1);
    }
    return (
      <div>
        <input type="button" id="greatButton" value="Everything was great!"/>
        <p className="f-09">Rate everything as a 5.</p>
      </div>
    );
}
