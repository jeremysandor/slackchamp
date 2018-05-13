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
import makeSelectSignup from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

// material ui
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';


import { Auth } from 'aws-amplify';

export class Signup extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet>
          <title>Signup</title>
          <meta name="description" content="Signup for Zipstu" />
        </Helmet>
        <FormattedMessage {...messages.header} />
        <div>
          <form onSubmit={this.props.onSubmitForm}>
            
            <label htmlFor="email">
              <Input
                id="email"
                type="text"
                placeholder="Email"
                value={this.props.email}
              />
            </label><br />

            <label htmlFor="password">
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={this.props.password}
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
};

const mapStateToProps = createStructuredSelector({
  signup: makeSelectSignup(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
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
