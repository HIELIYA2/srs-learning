import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../../actions/cardsAction';
import './addCard.scss';
import firebase from '../../firebase';
import 'firebase/auth';

interface ICard {
    term: string;
    definition: string;
    createAt: number;
    tags: [];
    slot: [number];
    nextAppearance: Number;
    cardInOrder: number;
    // uid: any;
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

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            console.log('user', user);
        });
    }

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
            // uid: firebase.auth().currentUser?.uid,
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        onAddClick: (card: any) => {
            console.log('dispatch:', card);
            dispatch(addCard(card));
        },
    };
};

export default connect(null, mapDispatchToProps)(AddCard);
