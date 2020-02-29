import React, { Component } from 'react';
import './values.scss';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { updateCard } from '../../actions/cardsAction';
import trashsvg from '../../assets/trash.svg';
import recyclesvg from '../../assets/recycle.svg';
import pencilsvg from '../../assets/pencil.svg';

interface Props {
    values: any;
    index: number;
    onDeleteCard: (card: any) => void;
    onRestoreCard: (card: any) => void;
}
interface State {}

class Walues extends Component<Props, State> {
    restoreCard = (card: any) => {
        card.isDeleted = false;
        this.props.onRestoreCard(card);
    };
    deleteCard = (card: any) => {
        card.isDeleted = true;
        this.props.onDeleteCard(card);
    };
    render() {
        const { values } = this.props;
        return (
            <div className="values">
                <h1 className="index">{this.props.index}</h1>
                <div className="face-card" title="term-card">
                    <h1 className="term">{values.term}</h1>
                </div>
                <div className="face-card" title="definition-card">
                    <h1 className="definition">{values.definition}</h1>
                </div>
                <div className="action-buttons">
                    <div className="edit" title="edit-card">
                        <Link to={{ pathname: '/edit', state: { card: values } }}>
                            <img className="edit-img" src={pencilsvg} alt="" />
                        </Link>
                    </div>
                    <div className="isDeleted">
                        {values.isDeleted ? (
                            <button
                                className="restore-button"
                                title="restore-card"
                                onClick={() => this.restoreCard(values)}
                            >
                                <img className="restore-img" src={recyclesvg} alt="" />
                            </button>
                        ) : (
                            <button
                                className="delete-button"
                                title="delete-card"
                                onClick={() => this.deleteCard(values)}
                            >
                                <img className="trash-img" src={trashsvg} alt="" />
                            </button>
                        )}
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        onDeleteCard: (card: any) => {
            dispatch(updateCard(card));
        },
        onRestoreCard: (card: any) => {
            dispatch(updateCard(card));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Walues);
