import React, { Component } from 'react';
import AddCard from '../../cmps/addCard/addCard';
import { connect } from 'react-redux';

import './create.css';

interface Props {
    location: any;
}
interface State {}

class Create extends Component<Props, State> {
    render() {
        // let term = '';
        // let definition = '';
        // if (this.props.location.state) {
        //     term = this.props.location.state.term;
        //     definition = this.props.location.state.definition;
        // }
        // console.log(term, definition);
        return (
            <div>
                <AddCard />
            </div>
        );
    }
}
export default connect()(Create);
