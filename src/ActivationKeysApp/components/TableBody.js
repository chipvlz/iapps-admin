import React, { Component } from 'react';
import { connect } from 'react-redux';

import KeyRow from './KeyRow/';


class TableBody extends Component {
    render() {
        return (
            <tbody>
                {this.props.keys.map((item, index) => <KeyRow key={index} data={item} />)}
            </tbody>
        );
    }
}

export default connect(
    (state) => ({
        keys: state.keys
    }),
    (dispatch) => ({})
)(TableBody);