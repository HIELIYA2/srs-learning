import React, { Component } from 'react';
import './card.scss';
import { connect } from 'react-redux';

interface iCard {
    _id: string;
    term: string;
    definition: string;
    nextAppearance: number;
}

interface Props {
    card: iCard;
}
interface state {
    activeDefinition: boolean;
}

class Card extends Component<Props, state> {
    state = {
        activeDefinition: false,
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
            <div>
                <div className="flip-card" onClick={this.tuggle}>
                    <div className={this.state.activeDefinition ? 'card' : 'card is-flipped'}>
                        <div className="card-face flip-card-front">{card.term}</div>
                        <div className="card-face flip-card-back">{card.definition}</div>
                    </div>
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

export default connect(mapStateToProps)(Card);
