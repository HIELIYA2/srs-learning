import React from 'react';
import { connect } from 'react-redux';
import './menuButton.scss';

interface Props {
    open: boolean;
    onClick: any;
}
interface State {
    open: boolean;
}

class MenuButton extends React.Component<Props, State> {
    state = {
        open: this.props.open ? this.props.open : false,
    };
    componentWillReceiveProps(nextProps: any) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
    }

    handleClick() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div
                className="container"
                onClick={
                    this.props.onClick
                        ? this.props.onClick
                        : () => {
                              this.handleClick();
                          }
                }
            >
                {this.state.open ? (
                    <div>
                        <div className="line lineTop-open" />
                        <div className="line lineMiddle-open" />
                        <div className="line lineBottom-open" />
                    </div>
                ) : (
                    <div>
                        <div className="line lineTop-close" />
                        <div className="line lineMiddle-close" />
                        <div className="line lineBottom-close" />
                    </div>
                )}
            </div>
        );
    }
}

export default connect()(MenuButton);
