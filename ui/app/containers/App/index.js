/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import MainPage from 'containers/MainPage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import VenuePage from 'containers/VenuePage/Loadable';
import TablePage from 'containers/TablePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import {sessionSelector} from './selectors';
import {loadSession} from './actions';

import reducer from './reducer';
import saga from './saga';


const AppWrapper = styled.div`
  
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

// export default function App() {
//   return (
//     <AppWrapper>
//       <Helmet
//         titleTemplate="%s - Trust the Hinkie"
//         defaultTitle="Trust the Hinkie"
//       >
//         <meta name="description" content="Trust it" />
//       </Helmet>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={MainPage} />
//         <Route path="/features" component={FeaturePage} />
//         <Route path="/venues" component={VenuePage} />
//         <Route path="/admin" component={TablePage} />
//         <Route path="" component={NotFoundPage} />
//       </Switch>
//       <Footer />
//     </AppWrapper>
//   );
// }


export class App extends React.PureComponent {
  componentDidMount() {
    console.log('APP componentDidMount', this.props);
    if (!this.props.session) {
      this.props.onLoadSession();
    }

  }

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Trust the Hinkie"
          defaultTitle="Trust the Hinkie"
        >
          <meta name="description" content="Trust it" />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/features" component={FeaturePage} />
          <Route path="/venues" component={VenuePage} />
          <Route path="/admin" component={TablePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
      </AppWrapper>
    )
  }
}

App.propTypes = {
  // loggedIn: PropTypes.bool,
  // isAdmin: PropTypes.bool,
  session: PropTypes.oneOfType([
    PropTypes.object, 
    PropTypes.bool
  ]),
}

export function mapDispatchToProps(dispatch) {
  return {
    onLoadSession: (evt) => {
      console.log('onLoadSession evt', evt);
      dispatch(loadSession())
    },
  };
}

const mapStateToProps = createStructuredSelector({
  session: sessionSelector(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'session', reducer });
const withSaga = injectSaga({key: 'session', saga });


export default compose(
  withReducer,
  withSaga,
  withConnect,  
)(App);

