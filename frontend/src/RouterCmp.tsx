import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Nav from './cmps/layout/navbar/NavBar';
import Home from './pages/home/home';
import Create from './pages/create/create';
import Learn from './pages/learn/learn';

class RouterCmp extends Component {
    render() {
        return (
            <Router>
                <Nav />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/learn" component={Learn} />
                </Switch>
            </Router>
        );
    }
}

export default RouterCmp;
