import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// import StatusApp from './StatusApp';
// import KeyGenerationApp from './KeyGenerationApp';
import ActivationKeysApp from './ActivationKeysApp';

import { Provider } from 'react-redux';
import store from './store';

console.log('DEBUG');

ReactDOM.render((
    <Provider store={store}>
        <div>
            {/*<StatusApp />*/}
            {/*<KeyGenerationApp />*/}
            <ActivationKeysApp />
        </div>
    </Provider>
), document.getElementById('status-app'));

// ReactDOM.render(<StatusApp />, document.getElementById('status-app'));
// ReactDOM.render(<KeyGenerationApp />, document.getElementById('key-generation-app'));
// ReactDOM.render(<ActivationKeysApp />, document.getElementById('activation-keys-app'));

registerServiceWorker();
