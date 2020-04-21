import React, { Component } from 'react';
import './cards.scss';
import Values from '../../cmps/values/values';
import Loading from '../../cmps/loading/loading';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cardsAction';

interface myProps {
    cards: [Card] | null;
    error: string | null;
    user: [user];
    getCards: Function;
}

interface Card {
    _id: string | number | undefined;
    term: string;
    definition: string;
    createAt: number;
    tags: [];
    slot: number;
    nextAppearance: number;
    isDeleted: boolean;
    uid: string;
}

interface user {
    _id: string | null;
    phutoUrl: string | null;
    name: string | null;
    uid: string | null;
    cardsID: any;
}

class Learn extends Component<myProps> {
    componentDidMount() {
        const {user, getCards} = this.props;
        const hasUser = Object.keys(user).length === 0
        if (hasUser) {
            getCards(user);
        }
    }

    componentDidUpdate(prevProps: myProps) {
        if (this.props.user !== prevProps.user) {
            this.props.getCards(this.props.user);
        }
    }

    render() {
        let currentIndex = 1;
        const { cards, error } = this.props;

        if (error) {
          return <h1>{error}</h1>;
        }

        if (cards === null) {
            return <Loading />;
        }

        if (cards.length < 1) {
          return <h1>There are no terms to learn today</h1>;
        }

        return (
            <div className="table">
              {cards.map(card => (
                <div key={card._id}>
                  <Values values={card} index={currentIndex++} />
                </div>
              ))}
            </div>
        )
    }
}
const mapStateToProps = (state: { cards: any; user: any }) => {
    const cards = state.cards.cards;
    const filteredCards = cards ? cards.filter((card: Card) => !!card) : cards;
    return ({
        // TODO: why is it nested in cards.cards / cards.error?
        cards: filteredCards,
        error: state.cards.error,
        user: state.user,
    });
}
export default connect(mapStateToProps, { getCards })(Learn);
