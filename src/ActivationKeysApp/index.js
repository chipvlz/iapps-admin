import React, { Component } from 'react';
import { connect } from 'react-redux';

import Table from './components/Table/';
import Modal from './components/Modal/';
import LoadMoreButton from './LoadMoreButton';

import { loadKeysList } from './actions';

class ActivationKeysApp extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.loadKeysList();
    }

    render() {
        return (
            <div className="col-md-12 col-lg-12 col-sm-12">
                <div className="white-box">
                    <h3 className="box-title">Активные коды доступа</h3>
                    <div className="table-responsive text-center">
                        <Table />
                        <LoadMoreButton />
                    </div>
                </div>
                <Modal />
            </div>
        );
    }
}

export default connect(
    (state, ownProps) => ({
        itemsCount: state.KeysApp.items.length
    }),
    (dispatch, ownProps) => ({
        loadKeysList: loadKeysList(dispatch)
    })
)(ActivationKeysApp);