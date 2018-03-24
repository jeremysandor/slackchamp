import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
// import messages from './messages';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  
  
  render() {
    return (
      <AppBar position="static" >      
        <Toolbar>
          <IconButton className="menu" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>          
          <Typography variant="title" color="inherit">
            Trust the Hinkie
          </Typography>
        </Toolbar>
      </AppBar>
    );

    // return (
    //   <div>Trust The Hinkie</div>
    // );
  }
}



export default Header;


// Banner creating an odd error. 
// commenting out for now
// <A href="https://twitter.com/mxstbr">
//   <Img src={Banner} alt="react-boilerplate - Logo" />
// </A>


// <NavBar>
//   <HeaderLink to="/">
//     <FormattedMessage {...messages.home} />
//   </HeaderLink>
//   <HeaderLink to="/features">
//     <FormattedMessage {...messages.features} />
//   </HeaderLink>
// </NavBar>