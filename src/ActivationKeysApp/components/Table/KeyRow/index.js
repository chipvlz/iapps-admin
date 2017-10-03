import React from 'react';
import { connect } from 'react-redux';

import EnableDisableButton from './EnableDisableButton';
import RemoveButton from './RemoveButton';

import './styles.css';


class KeyRow extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td><input type="text" value={this.props.data.code} readOnly /></td>
                <td><span className={`text-${(Number(this.props.data.status) ? 'success' : 'danger')}`}>{(Number(this.props.data.status) ? 'Активно' : 'Неактивно')}</span></td>
                <td>{this.props.data.date}</td>
                <td>{this.props.data.price}({this.props.data.pay_count})</td>
                <td><a target="_blank" rel="noopener noreferrer" href={this.props.data.user_profile}>{this.props.data.user_profile}</a></td>
                <td className="cursor-pointer">
                    <ul className="dlist">
                        {this.props.data.devices && this.props.data.devices.trim().split('- \n').map((item, index) =>
                            <li key={index}><small><span>{item}</span></small></li>
                        )}
                    </ul>
                </td>
                <td>
                    <table className="buttons-table">
                        <tbody>
                            <tr>
                                <td><EnableDisableButton id={this.props.data.id} status={Number(this.props.data.status)} /></td>
                                <td><RemoveButton id={this.props.data.id} /></td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <button onClick={() => {
                                        this.props.setModalData(this.props.data)
                                    }} type="button" className="btn btn-info btn-xs" data-toggle="modal" data-target="#keysAppModal">Изменить</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
        );
    }
}

export default connect(
    (state) => ({}),
    (dispatch) => ({
        setModalData(data) {
            dispatch({type: 'SET_MODAL_DATA', payload: data});
        }
    })
)(KeyRow);