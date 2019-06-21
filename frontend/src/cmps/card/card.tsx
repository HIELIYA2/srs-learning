import React from 'react';
import './card.css';
import { connect } from 'react-redux';

interface Props {}

function card() {
    return <div className="learn-page">{card}</div>;
}

const mapStateToProps = (state: { cards: any }, ownProps: any) => {
    // let id = ownProps.match.params.post_id;
    return {
        cards: state.cards,
        // card: state.cards.find((card: { id: any }) => card.id === id),
    };
};

export default connect(mapStateToProps)(card);
