import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadKeysList } from './actions';

const spinner = (<span style={{
  animationName: 'rotate',
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  transformOrigin: '50% 45%',
  display: 'block'
}}>&#x21bb;</span>);

class LoadMoreButton extends Component {
  shouldComponentUpdate(props, state) {
    if (this.props.state !== props.state) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        {this.props.state.loading ?
          <div className="btn-group btn-group-sm">
            <span className="btn btn-primary">Загрузка</span>
            <span className="btn btn-primary">{spinner}</span>
          </div>
        :
        (!(this.props.itemsCount === this.props.maxCount) ?
          <div className="btn-group btn-group-sm">
            <span className="btn btn-default">{this.props.itemsCount}/{this.props.maxCount}</span>
            <button className="btn btn-primary" onClick={this.props.loadMore(10)}>Загрузить ещё 10</button>
            <button className="btn btn-primary" onClick={this.props.loadMore(50)}>Загрузить ещё 50</button>
            <button className="btn btn-primary" onClick={this.props.loadMore(100)}>Загрузить ещё 100</button>
            <button className="btn btn-primary" onClick={this.props.loadAll}>Загрузить всё ({this.props.maxCount})</button>
          </div> : <div>Все елементы загружены ({this.props.itemsCount})</div>)
        }
      </div>
    );
  }
}


export default connect(
    (state, ownProps) => ({
      itemsCount: state.KeysApp.items.length,
      maxCount: state.KeysApp.maxCount,
      state: state.KeysApp.state
    }),
    (dispatch, ownProps) => ({
      loadMore(itemsCount,count) {
        return () => loadKeysList(dispatch)(itemsCount, count);
      },
      loadAll() {
        loadKeysList(dispatch)(-1);
      }
    }),
    (stateProps, dispatchProps, ownProps) => {
      return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        loadMore: dispatchProps.loadMore.bind(null, stateProps.itemsCount)
      };
    }
)(LoadMoreButton);