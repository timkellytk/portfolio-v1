import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import MobileNav from '../../components/Nav/MobileNav/MobileNav';

class Layout extends Component {
  state = {
    mobileNav: false,
  };

  openMobileNav = () => {
    this.setState({ mobileNav: true });
  };

  closeMobileNav = () => {
    this.setState({ mobileNav: false });
  };

  render() {
    return (
      <React.Fragment>
        <Nav open={this.openMobileNav} />
        <main>{this.props.children}</main>
        <MobileNav show={this.state.mobileNav} close={this.closeMobileNav} />
      </React.Fragment>
    );
  }
}

export default Layout;
