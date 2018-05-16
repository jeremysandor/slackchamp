/**
 *
 * Signup
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectSignup, makeSelectEmail, makeSelectPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// actions
import { signup, changeEmail, changePassword } from './actions'

// material ui
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export class Signup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Sign Up</title>
          <meta name="description" content="Signup for Zipstu" />
        </Helmet>
        <FormattedMessage {...messages.header} />
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

            <label htmlFor="password">
              <TextField
                id="password"
                type="password"
                label="Password"
                value={this.props.password}
                onChange={this.props.onChangePassword}
              />
            </label><br />           

            <Button type="submit" color="primary">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
  email: makeSelectEmail(),
  password: makeSelectPassword(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeEmail: (evt) => dispatch(changeEmail(evt.target.value)),
    onChangePassword: (evt) => dispatch(changePassword(evt.target.value)),
    onSubmitForm: (evt) => {
      console.log('EVT', evt);
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(signup());
    },    
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signup', reducer });
const withSaga = injectSaga({ key: 'signup', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Signup);
