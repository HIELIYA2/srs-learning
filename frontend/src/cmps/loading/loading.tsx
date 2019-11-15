import React, { Component } from 'react';
import './loading.scss';
import { connect } from 'react-redux';
import loading from '../../assets/loading.gif';

class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <img src={loading} alt="" />
            </div>
        );
    }
}

export default connect()(Loading);
