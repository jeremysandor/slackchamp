/**
 *
 * ForgotPassword
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
import { makeSelectEmail, makeSelectForgotPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';

// actions
import { sendCode, changeEmail } from './actions'

// material ui
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export class ForgotPassword extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Forgot Password</title>
          <meta name="description" content="Forgot Password" />
        </Helmet>

        <div>
          <form onSubmit={this.props.onSubmitForm}>
            
            <label htmlFor="email">
              <TextField
                autoFocus
                id="email"
                type="text"
                label="Email"
                value={this.props.email}
                onChange={this.props.onChangeEmail}
              />
            </label><br />       

            <Button type="submit" color="primary">
              Send Code
            </Button>
          </form>
        </div>

      </div>
    );
  }
}

ForgotPassword.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  email: PropTypes.string,
  onChangeEmail: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  forgotpassword: makeSelectForgotPassword(),
  email: makeSelectEmail(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onSubmitForm: (evt) => {
      console.log('EVT', evt);
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(sendCode());
    },       
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'forgotPassword', reducer });
const withSaga = injectSaga({ key: 'forgotPassword', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ForgotPassword);
