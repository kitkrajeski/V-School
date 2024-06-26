import React from 'react' //Step 1
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; //Step 2
import Home from './components/Home.jsx' // Step 8
import About from './components/About.jsx' // Step 10

// link to other places
// conditionally render pages based on the current location

// keep track of current location
// update current location
// read the current location
// conditionally render pages based on the current location


export default function App() { // Step 3
    return ( // Step 4


        <Router> {/*Step 5*/}

            <nav style={{ margin: 10 }}> {/*Step 11*/}
                <Link to="/" style={{ padding: 5 }}> {/*Step 12*/}
                    Home
                </Link> {/*Step 12*/}
                <Link to="/about" style={{ padding: 5 }}> {/*Step 13*/}
                    About
                </Link>{/*Step 13*/}
            </nav> {/*Step 11*/}

            <Routes> {/*Step 6*/}
                <Route path="/" element={<Home />} /> {/*Step 7*/}
                <Route path="/about" element={<About />} /> {/*Step 9*/}

                <Route path="/services/car-care"/>
                <Route path="/services/:id" />
                {/* services/8734r6qhxf87q38fxh7 */}
                {/* services/09r3489usref98eg784 */}
            </Routes> Step 6

        </Router> //Step 5
    ); //Step 4
} //Step 3
