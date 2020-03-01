import React, { Component } from 'react';
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
    isDeleted: boolean;
    uid: string | null;
}
interface IUser {
    _id: string | null;
    phutoUrl: string | null;
    name: string | null;
    uid: string | null;
    cards: any;
}
interface UUser {
    user: IUser;
}
interface State {
    term: string;
    definition: string;
}
interface Props {
    user: UUser;
    onAddClick: (card: ICard) => void;
}

class AddCard extends Component<Props, State> {
    state = {
        term: '',
        definition: '',
    };

    handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const { term, definition } = this.state;
        if (!term.trim() || !definition.trim()) return;
        this.props.onAddClick({
            term,
            definition,
            createAt: Date.now(),
            tags: [],
            nextAppearance: Date.now() + 86400000,
            slot: [1],
            isDeleted: false,
            uid: this.props.user.user.uid,
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

const mapStateToProps = (state: { user: any }) => {
    return { user: state.user };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddClick: (card: any) => {
            dispatch(addCard(card));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
