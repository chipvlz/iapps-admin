import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteKey } from './actions';


class RemoveButton extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.removeHandler} className="btn btn-danger btn-xs">Удалить</button>
            </div>
        );
    }
}


export default connect(
    (state) => ({}),
    (dispatch, ownProps) => ({
        removeHandler: deleteKey(dispatch, ownProps.id),
    }),
)(RemoveButton);