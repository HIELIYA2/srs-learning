import React, { Component } from 'react';
import './cards.scss';
import Values from '../../cmps/values/values';
import Loading from '../../cmps/loading/loading';
import { connect } from 'react-redux';
import { getCards } from '../../actions/cardsAction';

interface myProps {
    cards: [card];
    user: [user];
    getCards: Function;
}

interface card {
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

interface myState {
    isLoading: boolean;
}

interface user {
    _id: string | null;
    phutoUrl: string | null;
    name: string | null;
    uid: string | null;
    cardsID: any;
}

class Learn extends Component<myProps, myState> {
    state = {
        isLoading: true,
    };

    componentDidMount() {
        console.log('cards componentDidMount :', this.props.user, this.props.cards);
        this.props.getCards(this.props.user);
    }

    UNSAFE_componentWillReceiveProps() {
        console.log(
            'cards UNSAFE_componentWillReceiveProps :',
            this.props.user,
            this.props.cards,
            this.state.isLoading,
        );
        if (this.props.cards.length > 0) {
            this.setState({ isLoading: false });
        }
    }
    render() {
        let currentIndex = 1;
        const { cards } = this.props;
        return this.state.isLoading ? (
            <Loading />
        ) : (
            <div className="table">
                {cards.map(card => (
                    <div key={card._id}>
                        <Values values={card} index={currentIndex++} />
                    </div>
                ))}
            </div>
        );
    }
}
const mapStateToProps = (state: { cards: any; user: any }) => ({
    cards: state.cards.cards,
    user: state.user,
});

export default connect(mapStateToProps, { getCards })(Learn);
