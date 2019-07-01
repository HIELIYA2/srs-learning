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
        // let masage = this.state;
        console.log(this.state);
        return (
            <div className="home-page">
                {/* <h1 className="home-title">{this.state.masage}</h1> */}
                <Router />;
            </div>
        );
    }
}
// function App() {
//     return <Router />;
// }

export default App;
