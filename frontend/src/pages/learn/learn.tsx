import React, { Component } from 'react';
import './learn.css';
import Card from '../../cmps/card/card';
import { connect } from 'react-redux';
import { getCards } from '../../actions';
// import cards from '../../reducers/cards';

interface ICards {}
interface State {
    cards: any;
}
interface Props {
    onFetchData: (cards: ICards) => void;
}

class Learn extends Component<Props, State> {
    state = {
        cards: [],
    };

    componentDidMount() {
        let { cards } = this.state;
        this.props.onFetchData({ cards });
    }

    render() {
        const cards = this.state.cards;
        let index = Math.floor(Math.random() * Math.floor(1000));
        return (
            <ul>
                {console.log(cards)}
                {cards.map(card => (
                    <Card key={index} card={card} />
                ))}
            </ul>
        );
    }
}
const mapStateToProps = (state: { cards: any }, ownProps: any) => {
    let id = ownProps.match.params.post_id;
    return {
        cards: state.cards,
        card: state.cards.find((card: { id: string }) => card.id === id),
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onFetchData: () => {
            dispatch(getCards());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Learn);
