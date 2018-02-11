import React from 'react';
import { FormattedMessage } from 'react-intl';

// import A from './A';
// import Img from './Img';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import Banner from './banner.jpg';
// import messages from './messages';

import AppBar from 'material-ui/AppBar';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // return (
    //   <AppBar 
    //     title="TrustTheHinkie" 
    //     children='TrustTheHinkie'
    //   />
    // );

    return (
      <div>Trust The Hinkie</div>
    );
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