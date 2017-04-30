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
import Link from '../Link'
import Slider from '../Partials/Slider'

class Layout extends React.Component {

  componentDidMount(){
    let that = this;
    if(process.env.BROWSER) {
      // $('#mapvinhome').modal('show');
      if(process.env.BROWSER) {
        window.slideout = new Slideout({
          'panel': document.getElementById('panel'),
          'menu': document.getElementById('menuMobile'),
          'padding': 256,
          'tolerance': 70
        })
        //
        $('.menu-icon').on('click', function() {
          window.slideout.toggle()
          $('.menu-icon').toggleClass('open')
        })
      }
    }
  }

  menuClick(){
    window.slideout.close()
    $('.menu-icon').removeClass('open')
  }

  render() {
    return (
      <div id="wrapper">
        <LoadingBar showFastActions  maxProgress={80} progressIncrease={40} style={{ backgroundColor: 'red', zIndex: 1000, height: '2px' }} />
        <main id="panel">
          <Header />
          <Slider />
          <div id="menu2">
            <div id="container">
              <nav>
                <ul>
                  <li><Link to="/">Trang chủ</Link></li>
                  <li><Link to="/danhsach/cho-thue">Căn hộ cho thuê</Link>
                  </li>
                  <li><Link to="/danhsach/khu-t">Thuê & chuyển nhượng khu T</Link></li>
                  <li><Link to="/danhsach/khu-pack-hill">Thuê & chuyển nhượng khu Park Hill</Link></li>
                  <li><Link to="/danhsachthutuc">Thủ tục pháp lý</Link></li>
                </ul>
              </nav>
            </div>
          </div>
          {this.props.children}
          <Footer />

          <Modal />
          <div className="menu-icon">
            <span />
          </div>
          <div id="mapvinhome" className="modal fade" role="dialog">
            <div className="map">
              <img src="/imgs/map.jpg" alt="Ban do vinhomes"/>
            </div>
          </div>
        </main>
        <nav id="menuMobile" onClick={this.menuClick}>
          <Link to="/">
            Trang chủ
          </Link>
          <Link to="/danhsach/cho-thue" style={{fontSize: 12}} onClick={this.menuClick}>
            Căn hộ cho thuê
          </Link>
          <Link to="/danhsach/khu-t" style={{fontSize: 12}} onClick={this.menuClick}>
            Thuê & Chuyển nhượng khu T
          </Link>
          <Link to="/danhsach/khu-pack-hill" style={{fontSize: 12}} onClick={this.menuClick}>
            Thuê & Chuyển nhượng khu Pack Hill
          </Link>
          <Link to="/danhsachthutuc" style={{fontSize: 12}} onClick={this.menuClick}>
            Các thủ tục pháp lý
          </Link>
        </nav>
      </div>
    );
  }
}

export default Layout
