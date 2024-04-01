import React from "react";
import ReactDOM from "react-dom";

const reactPage = (
    <div>
        <div>
        <img></img>
        </div>
        <div>
            <h1>Fun facts about React</h1>
        </div>
        <div>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    </div>
)

ReactDOM.render(reactPage, document.getElementById("root"));