import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadKeysList } from './actions';


class LoadMoreButton extends Component {
  shouldComponentUpdate(props, state) {
    if (this.props.state !== props.state) {
      return true;
    }
    return false;
  }

  render() {
    console.log('RENDER', this.props);  
    return (
      <div>
        {this.props.state.loading ?
          <div className="btn-group">
            <button className="btn btn-primary" disabled>Загрузка</button>
          </div>
        :
          <div className="btn-group">
            <button className="btn btn-primary" onClick={this.props.loadAll}>Загрузить все</button>
            <button className="btn btn-primary" onClick={this.props.loadMore}>Загрузить больше</button>
          </div>
        }
      </div>
    );
  }
}


export default connect(
    (state, ownProps) => ({
      itemsCount: state.KeysApp.items.length,
      state: state.KeysApp.state
    }),
    (dispatch, ownProps) => ({
      loadMore(itemsCount) {
        loadKeysList(dispatch)(itemsCount);
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