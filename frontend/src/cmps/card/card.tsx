import React from 'react';
import './card.css';
import { connect } from 'react-redux';

interface iCard {
    term: string;
    definition: string;
}
interface Props {
    card: iCard;
}
const card: React.FC<Props> = ({ card }) => {
    return (
        <li>
            <div className="learn-page">{card.term}</div>
            <div className="learn-page">{card.definition}</div>
            <br />
        </li>
    );
};

const mapStateToProps = (state: { cards: any }, ownProps: any) => {
    // let id = ownProps.match.params.post_id;
    return {
        cards: state.cards,
        // card: state.cards.find((card: { id: any }) => card.id === id),
    };
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; id: string }) => void) => {
    return {
        deleteCard: (id: string) => {
            dispatch({ type: 'DELETE_CARD', id });
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(card);
