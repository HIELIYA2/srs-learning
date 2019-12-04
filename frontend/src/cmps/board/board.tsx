import React, { Component } from 'react';
import './board.scss';
// import Card from '../card/card';
import { connect } from 'react-redux';
import { deleteCard, updateCard } from '../../actions/cardsAction';

interface iCard {
    _id: string;
    term: string;
    definition: string;
    nextAppearance: number;
}

interface Props {
    card: iCard;
    nextCard: () => void;
    onDeleteCard: (id: string) => void;
    onSuccess: (card: any) => void;
    onFailure: (card: any) => void;
}
interface state {
    activeDefinition: boolean;
}

class Board extends Component<Props, state> {
    state = {
        activeDefinition: false,
    };

    handleClick = () => {
        this.setState({
            activeDefinition: false,
        });
        setTimeout(() => {
            this.props.nextCard();
        }, 150);
    };

    addDays = (date: number, number: number) => {
        return date + 1000 * 60 * 60 * 24 * number;
    };

    success = (card: any) => {
        let oldSlot = JSON.stringify(card.slot.pop());
        card.slot.push(JSON.parse(oldSlot) + 1);
        card.nextAppearance = this.addDays(Date.now(), Math.pow(2, +oldSlot));
        this.props.onSuccess(card);
        this.handleClick();
    };
    failure = (card: any) => {
        card.slot.push(1);
        card.nextAppearance = this.addDays(Date.now(), 1);
        this.props.onFailure(card);
        this.handleClick();
    };
    deleteCard = (id: string) => {
        console.log('deleteCard', id);
        this.props.onDeleteCard(id);
        this.handleClick();
    };
    tuggle = () => {
        const currentState = this.state.activeDefinition;
        this.setState({
            activeDefinition: !currentState,
        });
    };

    render() {
        let card = this.props.card;
        return (
            <div className="board">
                <div>
                    <div className="flip-card" onClick={this.tuggle}>
                        <div className={this.state.activeDefinition ? 'card' : 'card is-flipped'}>
                            <div className="card-face flip-card-front">{card.term}</div>
                            <div className="card-face flip-card-back">{card.definition}</div>
                        </div>
                    </div>
                </div>
                <div className="select-menu">
                    <button className="un-like-button" onClick={() => this.failure(card)}>
                        <svg className="un-like" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M 23 3 C 22.449219 3 22 3.449219 22 4 L 22 11.75 L 18 22 L 18 43 C 18.414063 44.164063 19.695313 45 21 45 L 40 45 C 42.207031 45 44 43.207031 44 41 C 44 40.175781 43.738281 39.417969 43.3125 38.78125 C 44.871094 38.234375 46 36.742188 46 35 C 46 34.019531 45.648438 33.132813 45.0625 32.4375 C 46.222656 31.738281 47 30.453125 47 29 C 47 28.019531 46.648438 27.132813 46.0625 26.4375 C 47.222656 25.738281 48 24.453125 48 23 C 48 20.792969 46.207031 19 44 19 L 29.375 19 C 29.984375 17.070313 31 13.617188 31 12 C 31 8.234375 28.242188 3 25.53125 3 Z M 3 19 C 2.714844 19 2.441406 19.128906 2.25 19.34375 C 2.058594 19.558594 1.964844 19.839844 2 20.125 L 5 44.125 C 5.0625 44.625 5.496094 45 6 45 L 15 45 C 15.550781 45 16 44.554688 16 44 L 16 20 C 16 19.449219 15.550781 19 15 19 Z M 11.5 38 C 12.328125 38 13 38.671875 13 39.5 C 13 40.328125 12.328125 41 11.5 41 C 10.671875 41 10 40.328125 10 39.5 C 10 38.671875 10.671875 38 11.5 38 Z " />
                        </svg>
                    </button>
                    <button className="delete-button" title="delete-card" onClick={() => this.deleteCard(card._id)}>
                        ✘
                    </button>
                    <button className="like-button" onClick={() => this.success(card)}>
                        <svg className="like" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
                            <path d="M 23 3 C 22.449219 3 22 3.449219 22 4 L 22 11.75 L 18 22 L 18 43 C 18.414063 44.164063 19.695313 45 21 45 L 40 45 C 42.207031 45 44 43.207031 44 41 C 44 40.175781 43.738281 39.417969 43.3125 38.78125 C 44.871094 38.234375 46 36.742188 46 35 C 46 34.019531 45.648438 33.132813 45.0625 32.4375 C 46.222656 31.738281 47 30.453125 47 29 C 47 28.019531 46.648438 27.132813 46.0625 26.4375 C 47.222656 25.738281 48 24.453125 48 23 C 48 20.792969 46.207031 19 44 19 L 29.375 19 C 29.984375 17.070313 31 13.617188 31 12 C 31 8.234375 28.242188 3 25.53125 3 Z M 3 19 C 2.714844 19 2.441406 19.128906 2.25 19.34375 C 2.058594 19.558594 1.964844 19.839844 2 20.125 L 5 44.125 C 5.0625 44.625 5.496094 45 6 45 L 15 45 C 15.550781 45 16 44.554688 16 44 L 16 20 C 16 19.449219 15.550781 19 15 19 Z M 11.5 38 C 12.328125 38 13 38.671875 13 39.5 C 13 40.328125 12.328125 41 11.5 41 C 10.671875 41 10 40.328125 10 39.5 C 10 38.671875 10.671875 38 11.5 38 Z " />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: { cards: any }) => {
    return {
        cards: state.cards,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onDeleteCard: (id: string) => {
            dispatch(deleteCard(id));
        },
        onSuccess: (card: any) => {
            console.log('onSuccess', card);
            dispatch(updateCard(card));
        },
        onFailure: (card: any) => {
            console.log('onFailure', card);
            dispatch(updateCard(card));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
