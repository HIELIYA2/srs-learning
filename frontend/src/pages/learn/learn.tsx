import React, { Component } from 'react';
import './learn.css';
import Card from '../../cmps/card/card';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cardsAction';

interface myProps {
    cards: [card];
    getCards: Function;
}

interface myState {}

interface card {
    _id: string;
    term: string;
    definition: string;
    createAt: number;
    tags: [];
    slot: number;
    nextAppearance: number;
}

class Learn extends Component<myProps, myState> {
    componentDidMount() {
        this.props.getCards();
        console.log(this.props);
    }

    render() {
        let cards = this.props.cards;
        return (
            <div>
                <ul>
                    {cards.map(card => (
                        <div key={card._id}>{card.nextAppearance < Date.now() && <Card card={card} />}</div>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state: { cards: any }) => ({
    cards: state.cards.cards,
});

// const mapDispatchToProps = (dispatch: any) => {
//     return {
//         onFetchData: () => {
//             dispatch(getCards());
//         },
//     };
// };

export default connect(
    mapStateToProps,
    { getCards },
)(Learn);
