import React from 'react';
import {Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
// ... other imports

function App() {
    return (
        <>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                {/* Add more routes as needed */}
            </Switch>
        </>
    );
}

export default App;