import React from 'react';

import { connect } from 'react-redux';

import {
    updateKey
} from '../actions.js'

const Modal = ({ data, updateKeyHandler }) => {
    console.log(data);
    const key = Date.now();

    return (
        <div id="keysAppModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">{data && data.id}: {data && data.user_profile}</h4>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={updateKeyHandler} className="clearfix">
                            <input type="hidden" id={data && data.id} />
                            <div className="form-group">
                                <label htmlFor="price">Цена:</label>
                                <input key={key} defaultValue={data && data.price} type="number" id="price" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="devices-num">Количество девайсов:</label>
                                <input key={key} defaultValue={data && data.cnt} type="number" id="devices-num" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="link">Ссылка на профиль:</label>
                                <input key={key} defaultValue={data && data.user_profile} type="url" id="link" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-success pull-right">Сохранить</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>);
}

export default connect(
    (state) => ({
        data: state.KeysApp.modal
    }),
    (dispatch) => ({
        updateKeyHandler(e) {
            e.preventDefault();
            dispatch(updateKey(e));
        }
    }),
)(Modal);