import React, {useEffect, useState} from 'react';
import '../../static/App.css';
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
        fetch('/api/mealpacks/')
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

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/this">
                        <This mealpacks={mealpacks}/>
                    </Route>
                </Switch>
            </Router>


        </div>
    );
}

export default App;
