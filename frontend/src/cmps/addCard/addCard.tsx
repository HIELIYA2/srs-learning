import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions';
import './addCard.css';

interface ICard {
    term: string;
    definition: string;
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
        this.props.onAddClick({ term, definition });
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
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="term"
                        placeholder="Enter front of the card"
                        className="term-input"
                        value={this.state.term}
                        onChange={this.handleChangeTerm}
                    />
                    <input
                        type="definition"
                        placeholder="Enter back of the card"
                        className="definition-input"
                        value={this.state.definition}
                        onChange={this.handleChangeDefinition}
                    />
                    <button className="form-add-button" type="submit">
                        +
                    </button>
                </form>
                ;<p>{localStorage.getItem('card')}</p>
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

export default connect(
    null,
    mapDispatchToProps,
)(AddCard);
