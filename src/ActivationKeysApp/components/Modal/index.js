import { connect } from 'react-redux';

import { updateKey } from '../../actions.js';

import Modal from './Modal';

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