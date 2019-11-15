import React, { Component } from 'react';
import './learn.css';
import Card from '../../cmps/card/card';
import Loading from '../../cmps/loading/loading';
import { connect } from 'react-redux';
import { getCardsToLearn } from '../../actions/cardsAction';

interface myProps {
    cards: [card];
    getCardsToLearn: Function;
}

interface myState {
    index: number;
    isLoading: boolean;
}

interface card {
    _id: string;
    term: string;
    definition: string;
    createAt: number;
    tags: [];
    slot: number;
    nextAppearance: number;
    cardInOrder: number;
}

class Learn extends Component<myProps, myState> {
    state = {
        index: 0,
        isLoading: true,
    };
    nextCard = () => {
        let currentCard = this.state.index;
        this.setState({
            index: ++currentCard,
        });
        console.log('nextCard', currentCard);
    };
    componentDidMount() {
        this.props.getCardsToLearn();
    }

    componentDidUpdate() {}

    render() {
        let cards = this.props.cards;
        if (cards[0]) {
            return (
                <div>
                    <ul>
                        <div>
                            {cards[this.state.index].nextAppearance < Date.now() && (
                                <Card card={cards[this.state.index]} nextCard={this.nextCard} />
                            )}
                        </div>
                    </ul>
                </div>
            );
        } else {
            return <Loading />;
        }
    }
}
const mapStateToProps = (state: { cards: any }) => ({
    cards: state.cards.cards,
});

export default connect(mapStateToProps, { getCardsToLearn })(Learn);
