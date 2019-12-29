import React, { Component } from 'react';
import './learn.scss';
import Board from '../../cmps/board/board';
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
    getNextCard = () => {
        let currentCard = this.state.index;
        this.setState({
            index: ++currentCard,
        });
        console.log('nextCard', currentCard);
    };
    componentDidMount() {
        this.props.getCardsToLearn();
    }

    render() {
        //  TODO: get only relevant cards from BE
        const { index } = this.state;
        const { cards } = this.props;
        if (cards[0]) {
            return (
                <div>
                    <ul>
                        <div>
                            {cards[index] && cards[index].nextAppearance < Date.now() && (
                                //TODO: getNextCard (function is verb)
                                <Board card={cards[index]} getNextCard={this.getNextCard} />
                            )}
                        </div>
                    </ul>
                </div>
            );
        } else {
            if (cards) {
                return <h1>There are no terms to learn today</h1>;
            } else {
                return <Loading />;
            }
        }
    }
}
const mapStateToProps = (state: { cards: any }) => ({
    cards: state.cards.cards,
});

export default connect(mapStateToProps, { getCardsToLearn })(Learn);
