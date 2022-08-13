import React, {useEffect, useState} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route, Link,
} from 'react-router-dom';
import {This} from "./components/This";
import {Home} from "./components/Home";


function App() {

    const [mealpacks, setMealpacks] = useState([]);

    useEffect(() => {
        fetch('http://167.99.203.5:8000/api/mealpacks/')
            .then(response => response.json())
            .then(data => {
                console.log('data is: ', data);
                setMealpacks(data);
            })
    }, [])

    return (
        <div className="App">
            <Router>
                <header className="flexybox" style={{backgroundColor: 'lightgreen'}}>
                    <Link to="/this">This</Link>
                    <Link to="/">Logo</Link>
                    <Link to="/that">That</Link>

                </header>
                <div><h1>Purlpe oranges floating in the red sky</h1></div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/this">
                        <This mealpacks={mealpacks}/>
                    </Route>
                    <Route path="/that">
                        <This mealpacks={mealpacks}/>
                    </Route>
                </Switch>
            </Router>


        </div>
    );
}

export default App;
