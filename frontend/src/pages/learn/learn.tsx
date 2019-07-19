import React, { Component } from 'react';
import './learn.css';
import Card from '../../cmps/card/card';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cardsAction';

interface myProps {
    cards: [];
    getCards: any;
}

interface myState {}

class Learn extends Component<myProps, myState> {
    componentWillMount() {
        this.props.getCards();
        console.log(this.props);
    }

    render() {
        const cards = this.props.cards;
        return (
            <ul>
                {cards.map((card: any) => (
                    <Card key={card._id} card={card} />
                ))}
            </ul>
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
