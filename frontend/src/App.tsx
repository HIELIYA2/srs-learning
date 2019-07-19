import React from 'react';
import './css/app.css';
import Router from './RouterCmp';
const axios = require('axios');

interface State {
    masage: string;
}

class App extends React.Component<State> {
    constructor(Props: Readonly<State>) {
        super(Props);
        this.state = {
            masage: '',
        };
    }
    componentDidMount() {
        axios.get('http://localhost:3000').then((res: any) => {
            console.log(res);
            this.setState({ masage: res.data });
        });
    }

    render() {
        return (
            <div className="home-page">
                <Router />
            </div>
        );
    }
}

export default App;
