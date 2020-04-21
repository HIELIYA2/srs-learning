import React, { Component } from 'react';
import './learn.scss';
import Board from '../../cmps/board/board';
import Loading from '../../cmps/loading/loading';
import { connect } from 'react-redux';
import { getCardsToLearn } from '../../actions/cardsAction';

interface myProps {
    cards: [card];
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
    };
    getNextCard = () => {
        let currentCard = this.state.index;
        this.setState({
            index: ++currentCard,
        });
        console.log('nextCard', currentCard);
    };
    componentDidUpdate(prevProps: myProps) {
        console.log(this.props.user);
        console.log(prevProps.user);
        if (this.props.user !== prevProps.user) {
            this.props.getCardsToLearn(this.props.user);
        }
    }
    render() {
        const { index } = this.state;
        const { cards } = this.props;
        const filtered = cards.filter(function(e) {
            return e;
        });

        if (cards === null) {
            return <Loading />;
        }

        if (filtered[index]) {
            return (
                <div>
                    <ul>
                        <div>
                            {filtered[index] && filtered[index].nextAppearance < Date.now() && (
                                <Board card={filtered[index]} getNextCard={this.getNextCard} />
                            )}
                        </div>
                    </ul>
                </div>
            );
        } else {
            if (filtered) {
                return <h1>There are no terms to learn today</h1>;
            } else {
                return <Loading />;
            }
        }
    }
}
const mapStateToProps = (state: { cards: any; user: any }) => ({
    cards: state.cards.cards,
    user: state.user,
});

export default connect(mapStateToProps, { getCardsToLearn })(Learn);
