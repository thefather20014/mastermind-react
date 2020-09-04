import React from 'react';
import { Home, Rules, Play } from './components/components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (

        <>
            <Router>
                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route exact path="/rules">
                        <Rules />
                    </Route>

                    <Route exact path="/play">
                        <Play />
                    </Route>

                </Switch>
            </Router>
        </>

    )
}

export default App
