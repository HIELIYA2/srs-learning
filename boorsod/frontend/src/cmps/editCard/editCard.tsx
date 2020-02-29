import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCard } from '../../actions/cardsAction';

import './editCard.scss';

interface ICard {
    term: string;
    definition: string;
    createAt: number;
    tags: [];
    slot: [number];
    nextAppearance: Number;
    isDeleted: boolean;
    uid: string | null;
}

interface State {
    term: string;
    definition: string;
}
interface Props {
    card: any;
    onEditClick: (card: ICard) => void;
}

class EditCard extends Component<Props, State> {
    state = {
        term: this.props.card.term,
        definition: this.props.card.definition,
    };

    handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let card = this.props.card;
        card.term = this.state.term;
        card.definition = this.state.definition;
        if (!card.term.trim() || !card.definition.trim()) return;
        this.props.onEditClick(card);
        window.history.back();
    };

    handleChangeTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ term: e.target.value });
    };

    handleChangeDefinition = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ definition: e.target.value });
    };

    render() {
        return (
            <div className="create-page">
                <form className="form-add-card" onSubmit={this.handleSubmit}>
                    <div className="inputs">
                        <input
                            name="textarea"
                            type="term"
                            placeholder="Enter front of the card"
                            className="term-input"
                            value={this.state.term}
                            onChange={this.handleChangeTerm}
                            autoFocus={true}
                        />
                        <input
                            type="definition"
                            placeholder="Enter back of the card"
                            className="definition-input"
                            value={this.state.definition}
                            onChange={this.handleChangeDefinition}
                        />
                    </div>
                    <button className="form-add-button" type="submit">
                        ✓
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onEditClick: (card: any) => {
            dispatch(updateCard(card));
        },
    };
};

export default connect(null, mapDispatchToProps)(EditCard);
