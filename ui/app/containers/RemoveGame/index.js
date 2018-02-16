/**
 *
 * RemoveGame
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectRemoveGame from './selectors';
import reducer from './reducer';
import saga from './saga';

function RemoveGame(e) {
  console.log('IN here????', e);
  return (
    <div>
    </div>
  );
}


// RemoveGame.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

// const mapStateToProps = createStructuredSelector({
//   removegame: makeSelectRemoveGame(),
// });

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'removegame', reducer });
// const withSaga = injectSaga({ key: 'removegame', saga });

// export default compose(
//   withReducer,
//   withSaga,
//   withConnect,
// )(RemoveGame);

export default RemoveGame;
