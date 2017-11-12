import React, { Component } from 'react';
import { connect } from 'react-redux';

import { generateKey } from '../actions';


class GenerationForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.generateKey} className="clearfix">
                <div className="form-group">
                    <select id="seller" className="form-control" disabled={this.props.state.generating}>
                        {this.props.sellers.map((item, index) => <option key={item.id} value={item.id}>{item.name}</option>)}
                    </select>
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" id="pay_count" placeholder="Оплаченое количество девайсов" disabled={this.props.state.generating} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="link" placeholder="Ссылка на профиль" disabled={this.props.state.generating} />
                </div>
                <button className="btn btn-success form-control" disabled={this.props.state.generating}>{this.props.state.generating ? 'Генерация' : 'Сгенерировать'}</button>
            </form>
        );
    }
}


export default connect(
    (state) => ({
        sellers: state.GenerationApp.sellers,
        state: state.GenerationApp.state,
    }),
    (dispatch) => ({
        generateKey: generateKey(dispatch),
    }),
)(GenerationForm);