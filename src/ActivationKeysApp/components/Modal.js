import React from 'react';

import { connect } from 'react-redux';

const Modal = ({ data }) => {
    return (
        <div id="keysAppModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">{data && data.id}: {data && data.user_profile}</h4>
                    </div>
                    <div className="modal-body">
                        <p>Some text in the modal.</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>);
}

export default connect(
    (state) => ({
        data: state.KeysApp.modal
    }),
    (dispatch) => ({}),
)(Modal);