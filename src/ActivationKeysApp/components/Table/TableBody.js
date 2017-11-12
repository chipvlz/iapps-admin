import React, { Component } from 'react';
import { connect } from 'react-redux';

import KeyRow from './KeyRow/';


class TableBody extends Component {
    render() {
        // {this.props.items.length ?
        //     this.props.items.map((item, index) => <KeyRow key={item.id} data={item} />) :
        //     <tr><td colSpan="8" style={{textAlign: 'center'}}><img src="/Spinner.svg" alt=""/></td></tr>}
        return (
            <tbody>
                {this.props.items.map((item, index) => <KeyRow key={item.id} data={item} />)}
            </tbody>
        );
    }
}

export default connect(
    (state) => ({
        items: state.KeysApp.items
    }),
    (dispatch) => ({})
)(TableBody);