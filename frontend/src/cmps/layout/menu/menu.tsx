import React from 'react';
import { connect } from 'react-redux';
import './menu.scss';

interface Props {
    open: boolean;
    children: any;
}
interface State {
    open: boolean;
}

class Menu extends React.Component<Props, State> {
    state = {
        open: this.props.open ? this.props.open : false,
    };

    componentWillReceiveProps(nextProps: any) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open });
        }
    }

    render() {
        return (
            <div>
                {this.props.open ? (
                    <div className="open">
                        {this.state.open ? <div className="menuList">{this.props.children}</div> : null}
                    </div>
                ) : (
                    <div className="close">
                        {this.state.open ? <div className="menuList">{this.props.children}</div> : null}
                    </div>
                )}
            </div>
        );
    }
}

export default connect()(Menu);
