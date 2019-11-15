import React, { Component } from 'react';
// import reactComponents from 'react-components';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cardsAction';
import './addCard.scss';

interface ICard {
    term: string;
    definition: string;
    createAt: number;
    tags: [];
    slot: [number];
    nextAppearance: Number;
    cardInOrder: number;
}
interface State {
    term: string;
    definition: string;
}
interface Props {
    onAddClick: (card: ICard) => void;
}

class AddCard extends Component<Props, State> {
    state = {
        term: '',
        definition: '',
    };

    handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let { term, definition } = this.state;
        if (!term.trim() || !definition.trim()) return;
        this.props.onAddClick({
            term,
            definition,
            createAt: Date.now(),
            tags: [],
            nextAppearance: Date.now() + 86400000,
            slot: [1],
            cardInOrder: 0,
        });
        this.setState({
            term: '',
            definition: '',
        });
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
                    {/* <div className="term">{this.state.term}</div> */}
                    <div className="inputs">
                        <input
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
                {/* <reactComponents /> */}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddClick: (card: any) => {
            dispatch(addCard(card));
        },
    };
};

export default connect(null, mapDispatchToProps)(AddCard);
