/*
 * Main page
 *
 * This is the admin page, at the /admin route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
// import DatePicker from 'react-datepicker';
import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectGames, makeSelectLoading, makeSelectError } from 'containers/App/selectors';

import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import GamesList from 'components/GamesList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';

import { loadRepos, loadGames, loadGamesOnRender } from '../App/actions';

import reducer from './reducer';
import saga from './saga';


export class MainPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    console.log('componentDidMount props', this.props);
    if (!this.props.games) {
      this.props.onLoadGames();
    } 
  }

  render() {
    console.log('MAIN PROPS', this.props);

    // this.props.onLoadGames();

    const { loading, error, games } = this.props;
    const gamesListProps = {
      loading,
      error,
      games,
    };


    return (
      <article>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Main Page" />
        </Helmet>
        <div>
          <Section>
            <GamesList {...gamesListProps} />
          </Section>
        </div>
      </article>
    );
  }
}


MainPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  games: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadGames: (evt) => {
      console.log('evt', evt);
      dispatch(loadGamesOnRender())
    },
  };
}

const mapStateToProps = createStructuredSelector({
  games: makeSelectGames(),
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
)(MainPage);
