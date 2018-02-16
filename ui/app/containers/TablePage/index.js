/*
 * Admin page
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

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectGames, makeSelectRepos, makeSelectLoading, makeSelectError } from 'containers/App/selectors';

// material ui
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';

import H2 from 'components/H2';
import ReposList from 'components/ReposList';
import GamesList from 'components/GamesList';
import AtPrefix from './AtPrefix';
import CenteredSection from './CenteredSection';
import Form from './Form';
// import Input from './Input';
import Section from './Section';
import messages from './messages';

import { loadRepos, loadGames, loadGamesOnRender } from '../App/actions';

import { changeAwayTeam } from './actions';
import { changeHomeTeam } from './actions';
import { changeLine } from './actions';
import { changeSide } from './actions';
import { changeTotal } from './actions';
import { changeDate } from './actions';

import { makeSelectAwayTeam } from './selectors';
import { makeSelectHomeTeam } from './selectors';
import { makeSelectLine } from './selectors';
import { makeSelectSide } from './selectors';
import { makeSelectTotal } from './selectors';
import { makeSelectDate } from './selectors';

import reducer from './reducer';
import saga from './saga';


export class TablePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    console.log('componentDidMount props', this.props)
    if (!this.props.games) {
      this.props.onLoadGames();
    }
  }

  render() {
    console.log('TABLE PROPS', this.props)
    const { loading, error, games } = this.props;
    const gamesListProps = {
      loading,
      error,
      games,
    };


    return (
      <article>
        <Helmet>
          <title>Admin</title>
          <meta name="description" content="Admin Page" />
        </Helmet>
        <div>
          <Section>
            <Form onSubmit={this.props.onSubmitForm}>
              
              <label htmlFor="homeTeam">
                <Input
                  id="homeTeam"
                  type="text"
                  placeholder="Home"
                  value={this.props.homeTeam}
                  onChange={this.props.onChangeHomeTeam}
                />
              </label>              

              <label htmlFor="awayTeam">
                <Input
                  id="awayTeam"
                  type="text"
                  placeholder="Away"
                  value={this.props.awayTeam}
                  onChange={this.props.onChangeAwayTeam}
                />
              </label>

              <label htmlFor="line">
                <Input
                  id="line"
                  type="text"
                  placeholder="Line"
                  value={this.props.line}
                  onChange={this.props.onChangeLine}
                />
              </label>        

              <label htmlFor="total">
                <Input
                  id="total"
                  type="text"
                  placeholder="Total"
                  value={this.props.total}
                  onChange={this.props.onChangeTotal}
                />
              </label>     

              <label htmlFor="side">
                <Input
                  id="side"
                  type="text"
                  placeholder="Side"
                  value={this.props.side}
                  onChange={this.props.onChangeSide}
                />
              </label>                    

              <label htmlFor="date">
                <Input
                  id="date"
                  type="text"
                  placeholder="2018-01-12 10:00:00"
                  value={this.props.date}
                  onChange={this.props.onChangeDate}
                />
              </label>  


              <Button type="submit" color="primary">
                Save
              </Button>
            </Form>

            <GamesList {...gamesListProps} />
          </Section>
        </div>
      </article>
    );
  }
}
              // <input type="submit" value="Save"/>
// <DatePicker selected={this.props.date} onChange={this.props.onChangeDate} showTimeSelect timeFormat="HH:mm" dateFormat="LLL"/>

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
  awayTeam: PropTypes.string,
  homeTeam: PropTypes.string,
  line: PropTypes.string,
  side: PropTypes.string,
  total: PropTypes.string,
  date: PropTypes.string,
  onChangeAwayTeam: PropTypes.func,
  onChangeHomeTeam: PropTypes.func,
  onChangeLine: PropTypes.func,
  onChangeSide: PropTypes.func,
  onChangeTotal: PropTypes.func,
  onChangeDate: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeHomeTeam: (evt) => dispatch(changeHomeTeam(evt.target.value)),
    onChangeAwayTeam: (evt) => dispatch(changeAwayTeam(evt.target.value)),
    onChangeLine: (evt) => dispatch(changeLine(evt.target.value)),
    onChangeSide: (evt) => dispatch(changeSide(evt.target.value)),
    onChangeTotal: (evt) => dispatch(changeTotal(evt.target.value)),
    onChangeDate: (evt) => dispatch(changeDate(evt.target.value)),
    // onChangeDate: (date) => dispatch(changeDate(date)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadGames());
    },
    onLoadGames: (evt) => {
      console.log('evt', evt);
      dispatch(loadGamesOnRender())
    },
  };
}

const mapStateToProps = createStructuredSelector({
  games: makeSelectGames(),
  awayTeam: makeSelectAwayTeam(),
  homeTeam: makeSelectHomeTeam(),
  line: makeSelectLine(),
  side: makeSelectSide(),
  total: makeSelectTotal(),
  date: makeSelectDate(),
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
