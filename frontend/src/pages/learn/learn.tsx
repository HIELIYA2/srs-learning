import React from 'react';
import './learn.css';
import Card from '../../cmps/card/card';
import { connect } from 'react-redux';

function Learn() {
    return (
        <div className="learn-page">
            <h1 className="learn-title">Learn page</h1>
            <Card />
        </div>
    );
}
const mapStateToProps = (state: { cards: any }, ownProps: any) => {
    // let id = ownProps.match.params.post_id;
    return {
        cards: state.cards,
        // card: state.cards.find((card: { id: any }) => card.id === id),
    };
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; id: any }) => void) => {
    return {
        deleteCard: (id: any) => {
            dispatch({ type: 'delete_card', id: id });
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Learn);
