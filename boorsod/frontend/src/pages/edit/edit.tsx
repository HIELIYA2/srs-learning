import React, { Component } from 'react';
import EditCard from '../../cmps/editCard/editCard';
import { connect } from 'react-redux';

import './edit.css';

interface Props {
    location: any;
}
interface State {}

class Edit extends Component<Props, State> {
    render() {
        const card = this.props.location.state.card;
        console.log(card);
        return (
            <div>
                <EditCard card={card} />
            </div>
        );
    }
}
export default connect()(Edit);
