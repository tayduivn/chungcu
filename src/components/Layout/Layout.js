/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';
// import s from './Layout.css';
// import Header from '../Header';
// import Feedback from '../Feedback';
// import Footer from '../Footer';
import LoadingBar from 'react-redux-loading-bar';
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import MenuMobile from '../Partials/MenuMobile'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  componentDidMount(){
    console.log('test ok')
    if(process.env.BROWSER) {
      window.myfunload()
    }
  }

  render() {
    return (
      <div id="wrapper">
        <LoadingBar showFastActions  maxProgress={80} progressIncrease={40} style={{ backgroundColor: 'red', zIndex: 1000, height: '2px' }} />
        <Header />
        <hr />
        {this.props.children}
        <hr />
        <Footer />
        <MenuMobile />
      </div>
    );
  }
}

export default Layout
