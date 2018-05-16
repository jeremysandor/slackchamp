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
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import MainPage from 'containers/MainPage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import VenuePage from 'containers/VenuePage/Loadable';
import TablePage from 'containers/TablePage/Loadable';
import Signup from 'containers/Signup/Loadable';
import Signin from 'containers/Signin/Loadable';
import ForgotPassword from 'containers/ForgotPassword/Loadable';
import ForgotPasswordSubmit from 'containers/ForgotPasswordSubmit/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import {sessionSelector} from './selectors';
import {loadSession} from './actions';

import reducer from './reducer';
import saga from './saga';

import { Link } from 'react-router-dom';

// material ui
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import { List, ListItem, ListItemIcon, ListItemText } from 'material-ui';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

// to-do move to a component 
import SupervisorAccount from 'material-ui-icons/SupervisorAccount';
import Home from 'material-ui-icons/Home';
import ViewList from 'material-ui-icons/ViewList';

// Authentication
import Amplify from 'aws-amplify';
Amplify.configure({
    Auth: {
    // REQUIRED - Amazon Cognito Identity Pool ID
        identityPoolId: process.env.AWS_IDENTITY_POOL_ID,
    // REQUIRED - Amazon Cognito Region
        region: process.env.AWS_REGION,
    // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: process.env.AWS_USER_POOL_ID,
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: process.env.AWS_USER_POOL_WEB_CLIENT_ID,
    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,
    // OPTIONAL - Configuration for cookie storage
        cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.app.localhost',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - Cookie secure flag
            secure: false
        }
    }
});
import { withAuthenticator } from 'aws-amplify-react'; 


const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: 'grey',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
  flex: {
    flex: 1,
  }
});



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
      <div className={this.props.classes.root}>
        <AppBar position="absolute" className={this.props.classes.appBar}>
          <Toolbar>
            <Typography variant="title" color="inherit" className={this.props.classes.flex} noWrap>
              Trust the Hinkie
            </Typography>
            <a href="http://localhost/api/login">
              <Button color="inherit">Login</Button>
            </a>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: this.props.classes.drawerPaper,
          }}
        >
        <div className={this.props.classes.toolbar} />
        <List>
          <Link to="/">
            <ListItem button>
              <ListItemIcon>
                <ViewList />
              </ListItemIcon>
              <ListItemText primary="Games" />
            </ListItem>          
          </Link>
        </List>
        <List>
          <Link to="/admin">
            <ListItem button>
              <ListItemIcon>
                <SupervisorAccount />
              </ListItemIcon>
              <ListItemText primary="Admin" />
            </ListItem>                
          </Link>
        </List>

        </Drawer>
        <main className={this.props.classes.content}>
          <div className={this.props.classes.toolbar} />
          <Switch>
           <Route exact path="/" component={MainPage} />
           <Route path="/features" component={FeaturePage} />
           <Route path="/venues" component={VenuePage} />
           <Route path="/admin" component={TablePage} />
           <Route path="/signup" component={Signup} />
           <Route path="/signin" component={Signin} />
           <Route path="/password/forgot" component={ForgotPassword} />
           <Route path="/password/submit" component={ForgotPasswordSubmit} />
           <Route path="" component={NotFoundPage} />
          </Switch>
          <Footer />          
        </main>        
      </div>
    )
  }

// <ListItem button component="a" href="/admin">

  // render() {
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
  //   )
  // }
}

App.propTypes = {
  // loggedIn: PropTypes.bool,
  // isAdmin: PropTypes.bool,
  classes: PropTypes.object,
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

// const withConnect = connect(mapStateToProps, mapDispatchToProps, null, {pure: false});
const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'session', reducer });
const withSaga = injectSaga({key: 'session', saga });


export default withRouter(compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles),
)(App));

