import React, { Component } from 'react';
import { connect } from 'react-redux';

import GenerationForm from './components/GenerationForm';
import { loadSellers } from './actions';


class KeyGenerationApp extends Component {
    componentDidMount() {
        this.props.loadSellers();
        console.log('MOUNT!', this.props);
    }

    render() {
        return (
            <div className="col-md-12 col-lg-12 col-sm-12">
                <div className="white-box">
                    <h3 className="box-title">Генерация кода</h3>
                    <GenerationForm />
                </div>
            </div>
        );
    }
}


export default connect(
    (state) => ({}),
    (dispatch) => ({
        loadSellers: loadSellers(dispatch),
    }),
)(KeyGenerationApp);