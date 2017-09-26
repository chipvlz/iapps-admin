import React, { Component } from 'react';

import GenerationForm from './components/GenerationForm';

class KeyGenerationApp extends Component {
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

export default KeyGenerationApp;