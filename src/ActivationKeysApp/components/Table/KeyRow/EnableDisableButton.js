import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    enableKey,
    disableKey
} from './actions';


class EnableDisableButton extends Component {
    render() {
        return (
            <div>
                {this.props.status ?
                    <button onClick={this.props.disableKey} className="btn btn-danger btn-xs">Отключить</button>
                    :
                    <button onClick={this.props.enableKey} className="btn btn-success btn-xs">Включить</button>
                }
            </div>
        );
    }
}

// export default EnableDisableButton;
export default connect(
    (state) => ({}),
    (dispatch, ownProps) => ({
        disableKey: disableKey(dispatch, ownProps.id),
        enableKey: enableKey(dispatch, ownProps.id),
    }),
)(EnableDisableButton);