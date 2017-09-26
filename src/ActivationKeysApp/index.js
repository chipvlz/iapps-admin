import React, { Component } from 'react';

import Table from './components/Table';

class ActivationKeysApp extends Component {
    render() {
        return (
            <div className="col-md-12 col-lg-12 col-sm-12">
                <div className="white-box">
                    <h3 className="box-title">Активные коды доступа</h3>
                    <div className="table-responsive">
                        <Table />
                    </div>
                </div>
            </div>
        );
    }
}

export default ActivationKeysApp;