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
            {console.log(card)}
            <div className="term">Term: {card.term}</div>
            <div className="definition">Definition: {card.definition}</div>
            <br />
        </li>
    );
};

const mapStateToProps = (state: { cards: any }) => {
    return {
        cards: state.cards,
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
