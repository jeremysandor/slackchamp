/**
 *
 * Signin
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
import { makeSelectSignin, makeSelectEmail, makeSelectPassword } from './selectors';
import reducer from './reducer';
import saga from './saga';

import { signin, changeEmail, changePassword } from './actions'

// material ui
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

export class Signin extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Sign In</title>
          <meta name="description" content="Description of Signin" />
        </Helmet>

        <div>
          <form onSubmit={this.props.onSubmitForm}>
            
            <label htmlFor="email">
              
              <TextField
                autoFocus
                label="Email"
                id="email"
                type="text"
                value={this.props.email}
                onChange={this.props.onChangeEmail}
              />
            </label><br />

            <label htmlFor="password">
              <TextField
                label="Password"
                id="password"
                type="password"
                value={this.props.password}
                onChange={this.props.onChangePassword}
              />
            </label><br />           

            <Button type="submit" color="primary">
              Sign In
            </Button>
          </form>
        </div>

      </div>
    );
  }
}

Signin.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,  
};

const mapStateToProps = createStructuredSelector({
  signin: makeSelectSignin(),
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
      dispatch(signin());
    },      
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'signin', reducer });
const withSaga = injectSaga({ key: 'signin', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Signin);
