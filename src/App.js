import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages'
import SignInPage from './Pages/signin'
import SignUpPage from './Pages/signup'


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/signin' component={SignInPage} exact/>
                <Route path='/signup' component={SignUpPage} exact/>

            </Switch>
        </Router>
    );
}

export default App;