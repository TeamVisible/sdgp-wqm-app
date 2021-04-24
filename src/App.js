import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Pages'
import SignInPage from './Pages/signin'
import SignUpPage from './Pages/signup'
import dashboard from './Pages/dashboard';


function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/signin' component={SignInPage} exact/>
                <Route path='/signup' component={SignUpPage} exact/>
                <Route path="/dashboard" component={dashboard} exact/>

            </Switch>
        </Router>
    );
}

export default App;