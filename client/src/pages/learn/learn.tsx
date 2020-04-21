import React, { Component } from 'react';
import './learn.scss';
import Board from '../../cmps/board/board';
import Loading from '../../cmps/loading/loading';
import { connect } from 'react-redux';
import { getCardsToLearn } from '../../actions/cardsAction';

interface myProps {
    cards: [Card] | null;
    error: string | null;
    user: [user];
    getCardsToLearn: Function;
}

interface myState {
    index: number;
}

interface user {
    _id: string | null;
    phutoUrl: string | null;
    name: string | null;
    uid: string | null;
    cardsID: any;
}

interface Card {
    _id: string;
    term: string;
    definition: string;
    createAt: number;
    tags: [];
    nextAppearance: number;
    slot: number;
    uid: string;
}

class Learn extends Component<myProps, myState> {
    state = {
        index: 0,
    };

    componentDidMount() {
        const {user, getCardsToLearn} = this.props;
        const hasUser = Object.keys(user).length === 0;
        if (hasUser) {
            getCardsToLearn(user);
        }
    }

    getNextCard = () => {
        let currentCard = this.state.index;
        this.setState({
            index: ++currentCard,
        });
        console.log('nextCard', currentCard);
    };

    componentDidUpdate(prevProps: myProps) {
        console.log('componentDidUpdate');
        if (this.props.user !== prevProps.user) {
            this.props.getCardsToLearn(this.props.user);
        }
    }

    render() {
        const { index } = this.state;
        const { cards, error } = this.props;

        if (error) {
            return <h1>{error}</h1>;
        }

        if (cards === null) {
            return <Loading />;
        }

        if (cards[index]) {
            return (
                <div>
                    <ul>
                        <div>
                            {cards[index] && (
                                <Board card={cards[index]} getNextCard={this.getNextCard} />
                            )}
                        </div>
                    </ul>
                </div>
            );
        } else {
            return <h1>There are no terms to learn today</h1>;
        }
    }
}
const mapStateToProps = (state: { cards: any; user: any }) => {
    const cards = state.cards.cards;
    const filteredCards = cards ? cards.filter((card: Card) => !!card && card.nextAppearance < Date.now()) : cards;
    return ({
        // TODO: why is it nested in cards.cards / cards.error?
        cards: filteredCards,
        error: state.cards.error,
        user: state.user,
    });
}

export default connect(mapStateToProps, { getCardsToLearn })(Learn);
