import React, { Component } from 'react';
import './learn.scss';
import Board from '../../cmps/board/board';
import Loading from '../../cmps/loading/loading';
import { connect } from 'react-redux';
import { getCardsToLearn } from '../../actions/cardsAction';

interface myProps {
    cards: [card] | null;
    user: [user];
    getCardsToLearn: Function;
}

interface myState {
    index: number;
    isLoading: boolean;
}

interface user {
    _id: string | null;
    phutoUrl: string | null;
    name: string | null;
    uid: string | null;
    cardsID: any;
}

interface card {
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
        isLoading: true,
    };
    getNextCard = () => {
        let currentCard = this.state.index;
        this.setState({
            index: ++currentCard,
        });
        console.log('nextCard', currentCard);
    };
    componentDidUpdate(prevProps: myProps) {
        if (this.props.user !== prevProps.user) {
            this.props.getCardsToLearn(this.props.user);
        }
    }
    render() {
        const { index } = this.state;
        const { cards } = this.props;

        if (cards === null) {
            return <Loading />;
        }

        if (cards[index]) {
            return (
                <div>
                    <ul>
                        <div>
                            {cards[index] && cards[index].nextAppearance < Date.now() && (
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
const mapStateToProps = (state: { cards: any; user: any }) => ({
    cards: state.cards.cards,
    user: state.user,
});

export default connect(mapStateToProps, { getCardsToLearn })(Learn);
