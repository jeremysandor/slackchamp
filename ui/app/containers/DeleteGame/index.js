/**
 *
 * DeleteGame
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import { deleteAction } from './actions';

import { makeSelectDeleteGame, makeSelectGameId } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class DeleteGame extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  

  render() {
    console.log('DeleteGame...', this.props)
    return (
      <button value={this.props.gameId} onClick={this.props.delete}>
        [X]
      </button>
    );
  }
}

DeleteGame.propTypes = {
  dispatch: PropTypes.func,
  delete: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // deletegame: makeSelectDeleteGame(),
  // gameId: makeSelectGameId(),
});

function mapDispatchToProps(dispatch) {
  return {
    delete: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      console.log('EVT', evt.target);
      dispatch(deleteAction(evt.target.value));
    },    
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'deleteGame', reducer });
const withSaga = injectSaga({ key: 'deleteGame', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DeleteGame);
