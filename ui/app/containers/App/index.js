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

