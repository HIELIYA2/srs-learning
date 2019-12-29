import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Pages
import Nav from './cmps/layout/navbar/NavBar';
import Home from './pages/home/home';
import Create from './pages/create/create';
import Learn from './pages/learn/learn';
import Login from './pages/login/login';

interface Props {
    isSignedIn: boolean;
}

class RouterCmp extends React.Component<Props> {
    render() {
        const { isSignedIn } = this.props;
        return (
            <Router>
                <Nav isSignedIn={isSignedIn} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/create" component={Create} />
                    <Route path="/learn" component={Learn} />
                    <Route path="/login" component={Login} />
                </Switch>
            </Router>
        );
    }
}

export default RouterCmp;
