import React, { Component } from 'react';

import StatusItem from './components/StatusItem';

class StatusApp extends Component {
    render() {
        return (
            <div>
                <StatusItem title="Общий" value={1000} />
                <StatusItem title="Дмитро" value={850} />
                <StatusItem title="Славік" value={150} />
            </div>
        );
    }
}

export default StatusApp;