/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectGames, makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import GamesList from 'components/GamesList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
import Input from './Input';
import Section from './Section';
import messages from './messages';
import { loadRepos, loadGames } from '../App/actions';
import { changeUsername } from './actions';
import { changeAwayTeam } from './actions';
import { makeSelectUsername } from './selectors';
import { makeSelectAwayTeam } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class TablePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    console.log('componentDidMount props', this.props)
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    console.log('TABLE PROPz', this.props)
    const { loading, error, games } = this.props;
    const gamesListProps = {
      loading,
      error,
      games,
    };

    // console.log('reposListProps', reposListProps)

    

    return (
      <article>
        <Helmet>
          <title>Table Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          <CenteredSection>
            <H2>
              Really
            </H2>
            <p>
              Simple
            </p>
          </CenteredSection>
          <Section>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                <Input
                  id="username"
                  type="text"
                  placeholder="mxstbr"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
                
              </label>
              <label htmlFor="awayTeam">
                <Input
                  id="awayTeam"
                  type="text"
                  placeholder="COLO"
                  value={this.props.awayTeam}
                  onChange={this.props.onChangeAwayTeam}
                />
              </label>
              <input type="submit" />
            </Form>
            <GamesList {...gamesListProps} />
          </Section>
        </div>
      </article>
    );
  }
}

TablePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  games: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
  awayTeam: PropTypes.string,
  onChangeUsername: PropTypes.func,
  onChangeAwayTeam: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeAwayTeam: (evt) => dispatch(changeAwayTeam(evt.target.value)),
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      console.log('hey');
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadGames());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  games: makeSelectGames(),
  username: makeSelectUsername(),
  awayTeam: makeSelectAwayTeam(),
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
)(TablePage);
