/**
 *
 * ForgotPasswordSubmit
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
import { makeSelectForgotPasswordSubmit, makeSelectCode, makeSelectPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';

// actions
import { submitPassword, changeCode, changePassword } from './actions'

// material ui
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export class ForgotPasswordSubmit extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>ForgotPasswordSubmit</title>
          <meta name="description" content="Forgot Password Submit" />
        </Helmet>
        
        <div>
          <form onSubmit={this.props.onSubmitForm}>
            
            <label htmlFor="code">
              <TextField
                autoFocus
                id="code"
                type="text"
                label="Code"
                value={this.props.code}
                onChange={this.props.onChangeCode}
              />
            </label><br />

            <label htmlFor="password">
              <TextField
                id="password"
                type="password"
                label="New Password"
                value={this.props.password}
                onChange={this.props.onChangePassword}
              />
            </label><br />           

            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </div>        
      </div>
    );
  }
}

ForgotPasswordSubmit.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  code: PropTypes.string,
  password: PropTypes.string,
  onChangeCode: PropTypes.func,
  onChangePassword: PropTypes.func,  
};

const mapStateToProps = createStructuredSelector({
  forgotpasswordsubmit: makeSelectForgotPasswordSubmit(),
  code: makeSelectCode(),
  password: makeSelectPassword(),  
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeCode: (evt) => dispatch(changeCode(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onSubmitForm: (evt) => {
      console.log('EVT', evt);
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(submitPassword());
    },       
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'forgotPasswordSubmit', reducer });
const withSaga = injectSaga({ key: 'forgotPasswordSubmit', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ForgotPasswordSubmit);
