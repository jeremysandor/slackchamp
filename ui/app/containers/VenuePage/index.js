// 
// This is a list of filterable venues
// 

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';

export class VenuePage extends React.PureComponent { 
  
  componentDidMount() {
    // when initial state username is not null, submit the form to load repos

    console.log('*** props', this.props)
    // if (this.props.venues && this.props.venues.trim().length > 0) {
    //   this.props.onSubmitForm();
    // }
  }

  render() {
    console.log('props', this.props)
    const { loading, error, venues } = this.props;
  };
}


VenuePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  venues: PropTypes.array,
  onFilterVenues: PropTypes.func,
}


export function mapDispatchToProps(dispatch) {
  return {
    onFilterVenues: (env) => dispatch(filterVenues(evt.target.value))
  };
}


const mapStateToProps = createStructuredSelector({
  // venues: 'makeSelectVenues()',
  loading: makeSelectLoading(),
  error: makeSelectError(),
});


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VenuePage);
