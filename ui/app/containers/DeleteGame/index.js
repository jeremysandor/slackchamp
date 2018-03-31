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

import { sessionSelector } from '../App/selectors'
import { makeSelectDeleteGame, makeSelectGameId } from './selectors';
import reducer from './reducer';
import saga from './saga';

import Clear from 'material-ui-icons/Clear';

export class DeleteGame extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  

  render() {
    if (this.props.session && this.props.session.admin) {
      return (
        <button value={this.props.gameId} onClick={this.props.delete}>
          [X]
        </button>  
      );
    } else {
      return null;
    }

  }
}

DeleteGame.propTypes = {
  dispatch: PropTypes.func,
  delete: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // deletegame: makeSelectDeleteGame(),
  // gameId: makeSelectGameId(),
  session: sessionSelector()
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
