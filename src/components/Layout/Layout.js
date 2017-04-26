/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import Header from '../Partials/Header'
import Footer from '../Partials/Footer'
import Modal from '../Partials/Modal'

class Layout extends React.Component {

  componentDidMount(){
    if(process.env.BROWSER) {
      // $('#mapvinhome').modal('show');
      if(process.env.BROWSER) {
        var slideout = new Slideout({
          'panel': document.getElementById('panel'),
          'menu': document.getElementById('menuMobile'),
          'padding': 256,
          'tolerance': 70
        })
        // slideout.open();
      }
    }
  }

  render() {
    return (
      <div id="wrapper">
        <LoadingBar showFastActions  maxProgress={80} progressIncrease={40} style={{ backgroundColor: 'red', zIndex: 1000, height: '2px' }} />
        <main id="panel">
          <Header />
          {this.props.children}

          <Footer />

          <Modal />

          <div id="mapvinhome" className="modal fade" role="dialog">
            <div className="map">
              <img src="/imgs/map.jpg" alt="Ban do vinhomes"/>
            </div>
          </div>
        </main>
        <nav id="menuMobile">
          <header>
            <h2>Menu</h2>
          </header>
        </nav>
      </div>
    );
  }
}

export default Layout
