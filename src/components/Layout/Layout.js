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
    }
  }

  render() {
    return (
      <div id="wrapper">
        <LoadingBar showFastActions  maxProgress={80} progressIncrease={40} style={{ backgroundColor: 'red', zIndex: 1000, height: '2px' }} />
        <Header />
        {this.props.children}


        <section className="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Liên hệ với chúng tôi</h2>
                <h3 className="section-subheading text-muted">Địa chỉ ...</h3>
                <a href="#" className="btn btn-lg btn-raised ripple-effect btn-danger ">Send Message <i className="fa fa-chevron-right" /></a>
              </div>
            </div>
          </div>
        </section>

        <div className="cta-box clearfix">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-3 col-xs-12 pull-right">
                <a href="#" className="btn btn-raised btn-danger ripple-effect btn-lg js-open-modal-left" data-original-title title data-em-selector="#ajaxModal" data-em-position="left" data-em-push-content="true" data-em-css="custom-class" data-em-keyboard="false" data-em-backdrop="static">
                  <i className="ti-shopping-cart">
                  </i> &nbsp; Sumbit Property
                </a>
              </div>
              <div className="col-md-9 col-sm-9 col-xs-12">
                <h3>
                  Welcome to LuxRealty. Responsive Real Estate template
                </h3>
                <p>
                  Carefully designed to bring you the best performance, usage and customization experience!
                </p>
              </div>
            </div>
          </div>
        </div>


        <Footer />
        <Modal />

        <div id="mapvinhome" className="modal fade" role="dialog">
          <div className="map">
            <img src="/imgs/map.jpg" alt="Ban do vinhomes"/>
          </div>
        </div>

      </div>
    );
  }
}

export default Layout
