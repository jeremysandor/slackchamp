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
import makeSelectDeleteGame from './selectors';
import reducer from './reducer';
import saga from './saga';

export class DeleteGame extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  

  render() {
    console.log('DeleteGame...')
    return (
      <div>
        <Helmet>
          <title>DeleteGame</title>
          <meta name="description" content="Description of DeleteGame" />
        </Helmet>
      </div>
    );
  }
}

DeleteGame.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  deletegame: makeSelectDeleteGame(),
});

function mapDispatchToProps(dispatch) {
  return {
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
