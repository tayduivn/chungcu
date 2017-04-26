import React, { PropTypes } from 'react';
import Slider from './Slider'
import Aside from '../../components/Partials/Aside'
// import MenuMobile from '../../components/Partials/MenuMobile'
import Link from '../../components/Link';

class Home extends React.Component {

  render() {
    const newApartments = this.props.data.newApartments.value
    return (
      <div >
        {/*<MenuMobile />*/}
        <Slider />
        <section className="inner-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-sm-8 content-row">

                <div className="row">
                  <div className="headerWr" >
                    <header>
                      <h2>CĂN HỘ TIMES CITY MỚI CẬP NHẬT</h2>
                    </header>
                  </div>
                </div>

                <div className="row">
                  {newApartments.map((el, index) => {
                    return (
                      <div key={index} className="col-sm-6 col-lg-4">
                        <div className="card">
                          <Link to={"/can-ho/" + el.slug} className="name">
                            <div className="card-image">
                              <img className="img-responsive" src={el.coverUrl} alt={el.title} />
                            </div>
                          </Link>
                          <div className="apartment-title">
                            <h2><Link to={"/can-ho/" + el.slug} className="name">{el.title}</Link></h2>
                          </div>
                          <div className="oldPrice">2.200.000.000 VNĐ</div>
                          <div className="newPrice">1.950.000.000 VNĐ</div>
                          {/* end. Card actions */}
                        </div>
                      </div>
                    )
                  })}

                </div>

                <div className="row">
                  <div className="headerWr" >
                    <header>
                      <h2>CHO THUÊ CĂN HỘ</h2>
                    </header>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-lg-4">
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
                  <div className="col-sm-6 col-lg-4">
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
                  <div className="col-sm-6 col-lg-4">
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
                  <div className="col-sm-6 col-lg-4">
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
                  <div className="col-sm-6 col-lg-4">
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
                  <div className="col-sm-6 col-lg-4">
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
                </div>

              </div>
              <Aside />
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            {/*TIn tuc*/}
            <div className="row mar-top">
              <div className="headerWr">
                <header>
                  <h2 >THÔNG TIN CẦN BIẾT</h2>
                </header>
              </div>
            </div>
            {/* /row */}
            <div className="row m-top-10">
              <div className="col-lg-3 col-sm-4">
                <div className="card">
                  <div className="card-image">
                    <img className="img-responsive" src="/assets/images/home-2.jpg" alt />
                  </div>
                  <div className="card-content">
                    <div className="listingInfo">
                      <div className="vcard">
                        <h2><a href="#" className="name">10250 W. Sunset Blvd | Holmby Hills 50 E 28th</a></h2>
                        <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}
              </div>
              <div className="col-lg-3 col-sm-4">
                <div className="card">
                  <div className="card-image">
                    <img className="img-responsive" src="/assets/images/home-2.jpg" alt />
                  </div>
                  <div className="card-content">
                    <div className="listingInfo">
                      <div className="vcard">
                        <h2><a href="#" className="name">10250 W. Sunset Blvd | Holmby Hills 50 E 28th</a></h2>
                        <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}
              </div>
              <div className="col-lg-3 col-sm-4">
                <div className="card">
                  <div className="card-image">
                    <img className="img-responsive" src="/assets/images/home-2.jpg" alt />
                  </div>
                  <div className="card-content">
                    <div className="listingInfo">
                      <div className="vcard">
                        <h2><a href="#" className="name">10250 W. Sunset Blvd | Holmby Hills 50 E 28th</a></h2>
                        <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.card */}
              </div>
              <div className="col-lg-3 col-sm-4">
                <div className="card">
                  <div className="card-image">
                    <img className="img-responsive" src="/assets/images/home-2.jpg" alt />
                  </div>
                  <div className="card-content">
                    <div className="listingInfo">
                      <div className="vcard">
                        <h2><a href="#" className="name">10250 W. Sunset Blvd | Holmby Hills 50 E 28th</a></h2>
                        <p className="listingLocation save"><i className="fa fa-map-o" />245 E 40th St, New York, NY 10016</p>
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
