import React, { PropTypes } from 'react';
import Slider from './Slider'
import Aside from '../../components/Partials/Aside'

class Home extends React.Component {

  render() {
    return (
      <div >
        <Slider />

        <section className="inner-page">
          <div className="container">
            <div className="row">
              <div className="col-sm-9 content-row">
                <div className="row">
                  <div style={{background: '#F37B24', height: 9, margin: '0 15px 15px 15px', position: 'relative'}}>
                    <header
                      style={{fontSize: 14, display: 'inline-block', background: 'rgb(243, 243, 243)', marginLeft: 25, padding: '0 15px', position: 'absolute', top: '-7px'}}>
                      <h2 style={{color: '#F37B24', fontWeight: 'bold' ,fontSize: 14, margin: '0 !important', display: 'inline-block'}}>CĂN HỘ TIMES CITY MỚI CẬP NHẬT</h2>
                    </header>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-image">
                        <img className="img-responsive" src="/assets/images/home-2.jpg" alt />
                        <span className="card-title">New Apartman</span>
                        <span className="card-price">For Sale</span>
                      </div>
                      <div className="card-content">
                        <div className="listingInfo">
                          <figure className="listerName">
                            <a href="#" className="agent-wrapper">
                              <img className="agent-photo" src="/assets/images/avatar-2.jpg" width={50} height={50} alt />
                            </a>
                          </figure>
                          <div className="propertyStats">
                            <p className="priceText">$430,000</p>
                          </div>
                          <div className="vcard">
                            <h2><a href="details.html" className="name">1B Alexander Court, Lewisham, Tas 7173</a></h2>
                            <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-action">
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="254 square feet"><i className="fa fa-th" /><span>167</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="5 Bedroom House"><i className="fa fa-bed" /><span>3</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="2 Parking space"><i className="fa fa-car" /><span>1</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title data-original-title="Energy-Efficient Home Grade B-"><i className="fa fa-battery-three-quarters" /><span> B-</span></a>
                        <div className="pull-right">
                          <a href="#" target="new_blank"><i className="fa fa-heart-o" /><span>Save</span></a>
                        </div>
                      </div>
                      {/* end. Card actions */}
                    </div>
                  </div>
                  {/* /col */}
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-image">
                        <img className="img-responsive" src="/assets/images/home-3.jpg" alt />
                        <span className="card-title">Modern Villa</span>
                        <span className="card-price">For Sale</span>
                      </div>
                      <div className="card-content">
                        <div className="listingInfo">
                          <figure className="listerName">
                            <a href="#" className="agent-wrapper">
                              <img className="agent-photo" src="/assets/images/avatar-2.jpg" width={50} height={50} alt />
                            </a>
                          </figure>
                          <div className="propertyStats">
                            <p className="priceText">$390,000</p>
                          </div>
                          <div className="vcard">
                            <h2><a href="details.html" className="name">1B Alexander Court, Lewisham, Tas 7173</a></h2>
                            <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-action">
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="254 square feet"><i className="fa fa-th" /><span>365</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="5 Bedroom House"><i className="fa fa-bed" /><span>3</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="2 Parking space"><i className="fa fa-car" /><span>2</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title data-original-title="Energy-Efficient Home Grade A++"><i className="fa fa-battery-three-quarters" /><span> A++</span></a>
                        <div className="pull-right">
                          <a href="#" target="new_blank"><i className="fa fa-heart-o" /><span>Save</span></a>
                        </div>
                      </div>
                      {/* end. Card actions */}
                    </div>
                  </div>
                  {/* /col */}
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-image">
                        <img className="img-responsive" src="/assets/images/home-7.jpg" alt />
                        <span className="card-title">Modern house</span>
                        <span className="card-price">For Rent</span>
                      </div>
                      <div className="card-content">
                        <div className="listingInfo">
                          <figure className="listerName">
                            <a href="#" className="agent-wrapper">
                              <img className="agent-photo" src="/assets/images/avatar-3.png" width={50} height={50} alt />
                            </a>
                          </figure>
                          <div className="propertyStats">
                            <p className="priceText">$390,000</p>
                          </div>
                          <div className="vcard">
                            <h2><a href="details.html" className="name">1B Alexander Court, Lewisham, Tas 7173</a></h2>
                            <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-action">
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="254 square feet"><i className="fa fa-th" /><span>254</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="5 Bedroom House"><i className="fa fa-bed" /><span>5</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="2 Parking space"><i className="fa fa-car" /><span>2</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="Pets Allowed"><i className="fa fa-paw" /><span>Yes</span></a>
                        <div className="pull-right">
                          <a href="#" target="new_blank"><i className="fa fa-heart-o" /><span>Save</span></a>
                        </div>
                      </div>
                      {/* end. Card actions */}
                    </div>
                  </div>
                  {/* /col */}
                </div>
                {/* /inner row */}
                <div className="row">
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-image">
                        <img className="img-responsive" src="/assets/images/home-5.jpg" alt />
                        <span className="card-title">New Apartman</span>
                        <span className="card-price">For Sale</span>
                      </div>
                      <div className="card-content">
                        <div className="listingInfo">
                          <figure className="listerName">
                            <a href="#" className="agent-wrapper">
                              <img className="agent-photo" src="/assets/images/avatar-4.png" width={50} height={50} alt />
                            </a>
                          </figure>
                          <div className="propertyStats">
                            <p className="priceText">$430,000</p>
                          </div>
                          <div className="vcard">
                            <h2><a href="details.html" className="name">1B Alexander Court, Lewisham, Tas 7173</a></h2>
                            <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-action">
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="254 square feet"><i className="fa fa-th" /><span>254</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="5 Bedroom House"><i className="fa fa-bed" /><span>5</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="2 Parking space"><i className="fa fa-car" /><span>2</span></a>
                        <div className="pull-right">
                          <a href="#" target="new_blank"><i className="fa fa-heart-o" /><span>Save</span></a>
                        </div>
                      </div>
                      {/* end. Card actions */}
                    </div>
                  </div>
                  {/* /col */}
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-image">
                        <img className="img-responsive" src="/assets/images/home-4.jpg" alt />
                        <span className="card-title">Modern Villa</span>
                        <span className="card-price">For Sale</span>
                      </div>
                      <div className="card-content">
                        <div className="listingInfo">
                          <figure className="listerName">
                            <a href="details.html" className="agent-wrapper">
                              <img className="agent-photo" src="/assets/images/avatar-5.jpg" width={50} height={50} alt />
                            </a>
                          </figure>
                          <div className="propertyStats">
                            <p className="priceText">$430,000</p>
                          </div>
                          <div className="vcard">
                            <h2><a href="#" className="name">1B Alexander Court, Lewisham, Tas 7173</a></h2>
                            <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-action">
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="254 square feet"><i className="fa fa-th" /><span>254</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="5 Bedroom House"><i className="fa fa-bed" /><span>5</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="2 Parking space"><i className="fa fa-car" /><span>2</span></a>
                        <div className="pull-right">
                          <a href="#" target="new_blank"><i className="fa fa-heart-o" /><span>Save</span></a>
                        </div>
                      </div>
                      {/* end. Card actions */}
                    </div>
                  </div>
                  {/* /col */}
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-image">
                        <img className="img-responsive" src="/assets/images/home-1.jpg" alt />
                        <span className="card-title">Modern house</span>
                        <span className="card-price">For Rent</span>
                      </div>
                      <div className="card-content">
                        <div className="listingInfo">
                          <figure className="listerName">
                            <a href="details.html" className="agent-wrapper">
                              <img className="agent-photo" src="/assets/images/avatar-4.png" width={50} height={50} alt />
                            </a>
                          </figure>
                          <div className="propertyStats">
                            <p className="priceText">$310 000</p>
                          </div>
                          <div className="vcard">
                            <h2><a href="#" className="name">1B Alexander Court, Lewisham, Tas 7173</a></h2>
                            <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-action">
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="254 square feet"><i className="fa fa-th" /><span>254</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="5 Bedroom House"><i className="fa fa-bed" /><span>5</span></a>
                        <a href="#" target="new_blank" data-toggle="tooltip" data-placement="top" title="2 Parking space"><i className="fa fa-car" /><span>2</span></a>
                        <div className="pull-right">
                          <a href="#" target="new_blank"><i className="fa fa-heart-o" /><span>Save</span></a>
                        </div>
                      </div>
                      {/* end. Card actions */}
                    </div>
                  </div>
                  {/* /col */}
                </div>
                {/* /inner row */}
                <div className="row mar-top">
                  <div className="row">
                    <div style={{background: 'red', height: 9, margin: '0 15px 15px 15px', position: 'relative'}}>
                      <header
                        style={{fontSize: 14, display: 'inline-block', background: 'rgb(243, 243, 243)', marginLeft: 25, padding: '0 15px', position: 'absolute', top: '-7px'}}>
                        <h2 style={{color: 'red', fontWeight: 'bold' ,fontSize: 14, margin: '0 !important', display: 'inline-block'}}>CHO THUÊ CĂN HỘ</h2>
                      </header>
                    </div>
                  </div>
                </div>
                {/* /row */}
                <div className="row m-top-10">
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-image">
                        <img className="img-responsive" src="/assets/images/home-2.jpg" alt />
                        <span className="card-title">Modern house</span>
                        <span className="card-price">For Rent</span>
                      </div>
                      <div className="card-content">
                        <div className="listingInfo">
                          <figure className="listerName">
                            <a href="#" className="agent-wrapper">
                              <img className="agent-photo" src="/assets/images/avatar-4.png" width={50} height={50} alt data-toggle="tooltip" data-placement="top" title="Agent Jason Doe,LuxReally Agency" />
                            </a>
                          </figure>
                          <div className="propertyStats">
                            <p className="priceText">$320,000</p>
                          </div>
                          <div className="vcard">
                            <h2><a href="#" className="name">10250 W. Sunset Blvd | Holmby Hills 50 E 28th</a></h2>
                            <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                          </div>
                        </div>
                      </div>
                      {/* child property */}
                      <ul className="childs">
                        <li className="child-property">
                          <div className="card-content">
                            <div className="listingInfo">
                              <div className="propertyStats">
                                <p className="priceText">$3,087 – $6,141</p>
                              </div>
                              <div className="vcard">
                                <h2><a href="#" className="name">31350 Lobo Canyon Road | Agoura Hills</a></h2>
                                <p className="listingLocation"><i className="fa fa-map-o" />50 E 28th St, New York, NY 10016</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* end:child property */}
                        <li className="child-property">
                          <div className="card-content">
                            <div className="listingInfo">
                              <div className="propertyStats">
                                <p className="priceText">$3,087 – $6,141</p>
                              </div>
                              <div className="vcard">
                                <h2><a href="#" className="name">31350 Lobo Canyon Road | Agoura Hills</a></h2>
                                <p className="listingLocation"><i className="fa fa-map-o" />50 E 28th St, New York, NY 10016</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* end:child property */}
                      </ul>
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /col */}
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-image">
                        <img className="img-responsive" src="/assets/images/home-9.jpg" alt />
                        <span className="card-title">Modern house</span>
                        <span className="card-price">For Rent</span>
                      </div>
                      <div className="card-content">
                        <div className="listingInfo">
                          <figure className="listerName">
                            <a href="#" className="agent-wrapper">
                              <img className="agent-photo" src="/assets/images/avatar-2.jpg" width={50} height={50} alt data-toggle="tooltip" data-placement="top" title="Agent Jason Doe,LuxReally Agency" />
                            </a>
                          </figure>
                          <div className="propertyStats">
                            <p className="priceText">$685 000</p>
                          </div>
                          <div className="vcard">
                            <h2><a href="#" className="name">201 Avondale Ave | Brentwood Agoura Hills</a></h2>
                            <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                          </div>
                        </div>
                      </div>
                      {/* child property */}
                      <ul className="childs">
                        <li className="child-property">
                          <div className="card-content">
                            <div className="listingInfo">
                              <div className="propertyStats">
                                <p className="priceText">$3650</p>
                              </div>
                              <div className="vcard">
                                <h2><a href="#" className="name">166 West 18th Street 12th FloorChelsea</a></h2>
                                <p className="listingLocation"><i className="fa fa-map-o" />50 E 28th St, New York, NY 10016</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* end:child property */}
                        <li className="child-property">
                          <div className="card-content">
                            <div className="listingInfo">
                              <div className="propertyStats">
                                <p className="priceText">$3,087 – $6,141</p>
                              </div>
                              <div className="vcard">
                                <h2><a href="#" className="name">31350 Lobo Canyon Road | Agoura Hills</a></h2>
                                <p className="listingLocation"><i className="fa fa-map-o" />50 E 28th St, New York, NY 10016</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* end:child property */}
                      </ul>
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /col */}
                  <div className="col-sm-4">
                    <div className="card">
                      <div className="card-image">
                        <img className="img-responsive" src="/assets/images/home-8.jpg" alt />
                        <span className="card-title">Modern house</span>
                        <span className="card-price">For Rent</span>
                      </div>
                      <div className="card-content">
                        <div className="listingInfo">
                          <figure className="listerName">
                            <a href="#" className="agent-wrapper">
                              <img className="agent-photo" src="/assets/images/avatar-5.jpg" width={50} height={50} alt data-toggle="tooltip" data-placement="top" title="Agent Jason Doe,LuxReally Agency" />
                            </a>
                          </figure>
                          <div className="propertyStats">
                            <p className="priceText">$3,390 – $6,855</p>
                          </div>
                          <div className="vcard">
                            <h2><a href="#" className="name">Puck Penthouses, PH II Lobo Canyon 40th St</a></h2>
                            <p className="listingLocation"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                          </div>
                        </div>
                      </div>
                      {/* child property */}
                      <ul className="childs">
                        <li className="child-property">
                          <div className="card-content">
                            <div className="listingInfo">
                              <div className="propertyStats">
                                <p className="priceText">$3,087 – $6,141</p>
                              </div>
                              <div className="vcard">
                                <h2><a href="#" className="name">740 Park Avenue Apt 6/7aUpper East Side</a></h2>
                                <p className="listingLocation"><i className="fa fa-map-o" />New York10021United States</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* end:child property */}
                        <li className="child-property">
                          <div className="card-content">
                            <div className="listingInfo">
                              <div className="propertyStats">
                                <p className="priceText">$3,087 – $6,141</p>
                              </div>
                              <div className="vcard">
                                <h2><a href="#" className="name">31350 Lobo Canyon Road | Agoura Hills</a></h2>
                                <p className="listingLocation"><i className="fa fa-map-o" />50 E 28th St, New York, NY 10016</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* end:child property */}
                      </ul>
                    </div>
                    {/* /.card */}
                  </div>
                  {/* /col */}
                </div>
                {/* /row */}
                {/**/}
              </div>

              {/* /col 9 */}
              <Aside />
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            {/*TIn tuc*/}
            <div className="row mar-top">
              <div style={{background: '#57badf', height: 9, margin: '0 15px 15px 15px', position: 'relative'}}>
                <header
                  style={{fontSize: 14, display: 'inline-block', background: 'rgb(243, 243, 243)', marginLeft: 25, padding: '0 15px', position: 'absolute', top: '-7px'}}>
                  <h2 style={{color: '#57badf', fontWeight: 'bold' ,fontSize: 14, margin: '0 !important', display: 'inline-block'}}>THÔNG TIN CẦN BIẾT</h2>
                </header>
              </div>
            </div>
            {/* /row */}
            <div className="row m-top-10">
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-image">
                    <img className="img-responsive" src="/assets/images/home-2.jpg" alt />
                    <span className="card-title">Modern house</span>
                    <span className="card-price">For Rent</span>
                  </div>
                  <div className="card-content">
                    <div className="listingInfo">
                      <figure className="listerName">
                        <a href="#" className="agent-wrapper">
                          <img className="agent-photo" src="/assets/images/avatar-4.png" width={50} height={50} alt data-toggle="tooltip" data-placement="top" title="Agent Jason Doe,LuxReally Agency" />
                        </a>
                      </figure>
                      <div className="propertyStats">
                        <p className="priceText">$320,000</p>
                      </div>
                      <div className="vcard">
                        <h2><a href="#" className="name">10250 W. Sunset Blvd | Holmby Hills 50 E 28th</a></h2>
                        <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-image">
                    <img className="img-responsive" src="/assets/images/home-9.jpg" alt />
                    <span className="card-title">Modern house</span>
                    <span className="card-price">For Rent</span>
                  </div>
                  <div className="card-content">
                    <div className="listingInfo">
                      <figure className="listerName">
                        <a href="#" className="agent-wrapper">
                          <img className="agent-photo" src="/assets/images/avatar-2.jpg" width={50} height={50} alt data-toggle="tooltip" data-placement="top" title="Agent Jason Doe,LuxReally Agency" />
                        </a>
                      </figure>
                      <div className="propertyStats">
                        <p className="priceText">$685 000</p>
                      </div>
                      <div className="vcard">
                        <h2><a href="#" className="name">201 Avondale Ave | Brentwood Agoura Hills</a></h2>
                        <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-image">
                    <img className="img-responsive" src="/assets/images/home-8.jpg" alt />
                    <span className="card-title">Modern house</span>
                    <span className="card-price">For Rent</span>
                  </div>
                  <div className="card-content">
                    <div className="listingInfo">
                      <figure className="listerName">
                        <a href="#" className="agent-wrapper">
                          <img className="agent-photo" src="/assets/images/avatar-5.jpg" width={50} height={50} alt data-toggle="tooltip" data-placement="top" title="Agent Jason Doe,LuxReally Agency" />
                        </a>
                      </figure>
                      <div className="propertyStats">
                        <p className="priceText">$3,390 – $6,855</p>
                      </div>
                      <div className="vcard">
                        <h2><a href="#" className="name">Puck Penthouses, PH II Lobo Canyon 40th St</a></h2>
                        <p className="listingLocation"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}
              </div>
              <div className="col-sm-3">
                <div className="card">
                  <div className="card-image">
                    <img className="img-responsive" src="/assets/images/home-8.jpg" alt />
                    <span className="card-title">Modern house</span>
                    <span className="card-price">For Rent</span>
                  </div>
                  <div className="card-content">
                    <div className="listingInfo">
                      <figure className="listerName">
                        <a href="#" className="agent-wrapper">
                          <img className="agent-photo" src="/assets/images/avatar-5.jpg" width={50} height={50} alt data-toggle="tooltip" data-placement="top" title="Agent Jason Doe,LuxReally Agency" />
                        </a>
                      </figure>
                      <div className="propertyStats">
                        <p className="priceText">$3,390 – $6,855</p>
                      </div>
                      <div className="vcard">
                        <h2><a href="#" className="name">Puck Penthouses, PH II Lobo Canyon 40th St</a></h2>
                        <p className="listingLocation"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                      </div>
                    </div>
                  </div>

                </div>
                {/* /.card */}
              </div>
            </div>
            {/* /row */}
          </div>
        </div>
      </div>
  );
  }
}

export default Home
