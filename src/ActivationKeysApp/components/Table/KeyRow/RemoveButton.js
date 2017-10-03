import React, { Component } from 'react';

class RemoveButton extends Component {
    constructor(props) {
        super(props);
        this.removeHandler = this.removeHandler.bind(this);
    }

    removeHandler(e) {
        alert('Remove: ' + this.props.id);
    }

    render() {
        return (
            <div>
                <button onClick={this.removeHandler} className="btn btn-danger btn-xs">Удалить</button>
            </div>
        );
    }
}

export default RemoveButton;