import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    enableKey,
    disableKey
} from './actions';


class EnableDisableButton extends Component {
    constructor(props) {
        super(props);

        this.enableHandler = this.enableHandler.bind(this);
        this.disableHandler = this.disableHandler.bind(this);
    }

    enableHandler(e) {
        this.props.enableKey(this.props.id);
        // alert('Enable: ' + this.props.id);
    }

    disableHandler(e) {
        this.props.disableKey(this.props.id);
        // alert('Disable: ' + this.props.id);
    }

    render() {
        return (
            <div>
                {this.props.status ?
                    <button onClick={this.disableHandler} className="btn btn-danger btn-xs">Отключить</button>
                    :
                    <button onClick={this.enableHandler} className="btn btn-success btn-xs">Включить</button>
                }
            </div>
        );
    }
}

// export default EnableDisableButton;
export default connect(
    (state) => ({}),
    (dispatch) => ({
        disableKey(id) {
            dispatch(disableKey(id));
        },
        enableKey(id) {
            dispatch(enableKey(id));
        }
    }),
)(EnableDisableButton);