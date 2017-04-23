import React from 'react'

class Footer extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <footer id="footer">
        <div className="container">
          <div className="col-sm-3">
            <img src="/assets/images/logo-1.png" alt="#" className="img-responsive logo" />
            <p>
              Lux Realty,property theme &amp; publishing,with minimal design. We provide you with the latest fresh inspiration straight from the industrie.
            </p>
          </div>
          <div className="col-sm-3">
            <h5>
              COMMON TAGS
            </h5>
            <ul className="tags">
              <li>
                <a href="#" className="tag">
                  For Rent
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  For Sale
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  Sumbit property
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  Auctions
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  Find agent
                </a>
              </li>
              <li>
                <a href="#" className="tag">
                  Find agency
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>
              CATEGORIES
            </h5>
            <ul className="list-unstyled">
              <li>
                <a href="#">
                  For Rent
                </a>
              </li>
              <li>
                <a href="#">
                  For Sale
                </a>
              </li>
              <li>
                <a href="#">
                  Sumbit listing
                </a>
              </li>
              <li>
                <a href="#">
                  Auctions
                </a>
              </li>
              <li>
                <a href="#">
                  Find agent
                </a>
              </li>
              <li>
                <a href="#">
                  Find agency
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>
              ABOUT US
            </h5>
            <ul className="list-unstyled">
              <li>
                Available Jobs
              </li>
              <li>
                Sumbit property
              </li>
              <li>
                Contact Us
              </li>
              <li>
                History
              </li>
              <li>
                Impressium
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5>
              ABOUT US
            </h5>
            <ul className="list-unstyled">
              <li>
                Available Jobs
              </li>
              <li>
                Contact Us
              </li>
              <li>
                History
              </li>
              <li>
                Impressium
              </li>
            </ul>
          </div>
        </div>
        <div className="btmFooter">
          <div className="container">
            <div className="col-sm-7">
              <p>
                <strong>
                  Copyright 2015
                </strong> LuxRealty- real estate template made with
                <i className="ti-heart">
                </i>
                <strong>
                  by Codenpixel
                </strong>
              </p>
            </div>
            <div className="col-sm-5">
              <ul className="pay-opt pull-right list-inline list-unstyled">
                <li>
                  <a href="#" title="#">
                    <img src="/assets/images/amz-icon.png" className="img-responsive" alt />
                  </a>
                </li>
                <li>
                  <a href="#" title="#">
                    <img src="/assets/images/paypal-icon.png" className="img-responsive" alt />
                  </a>
                </li>
                <li>
                  <a href="#" title="#">
                    <img src="/assets/images/ax-icon.png" className="img-responsive" alt />
                  </a>
                </li>
                <li>
                  <a href="#" title="#">
                    <img src="/assets/images/mb-icon.png" className="img-responsive" alt />
                  </a>
                </li>
                <li>
                  <a href="#" title="#">
                    <img src="/assets/images/mst-icon.png" className="img-responsive" alt />
                  </a>
                </li>
                <li>
                  <a href="#" title="#">
                    <img src="/assets/images/mstr-icon.png" className="img-responsive" alt />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    )
  }
}

export {Footer as default}
