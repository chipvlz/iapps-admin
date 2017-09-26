import React, { Component } from 'react';
import { connect } from 'react-redux';

import KeyRow from './KeyRow/';


class TableBody extends Component {
    render() {
        return (
            <tbody>
                {this.props.keys.length ?
                    this.props.keys.map((item, index) => <KeyRow key={index} data={item} />) :
                    <tr><td colSpan="8" style={{textAlign: 'center'}}><img src="/Spinner.svg" alt=""/></td></tr>}
            </tbody>
        );
    }
}

export default connect(
    (state) => ({
        keys: state.KeysApp.keys
    }),
    (dispatch) => ({})
)(TableBody);