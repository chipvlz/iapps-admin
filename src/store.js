import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import ActivationKeyAppReducer from './ActivationKeysApp/reducer';

const store = createStore(combineReducers({
    keys: ActivationKeyAppReducer
}), composeWithDevTools(applyMiddleware(thunk)));


export default store;