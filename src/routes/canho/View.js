import React, { PropTypes } from 'react';
import Slider from './Slider'
import Aside from '../../components/Partials/Aside'
// import MenuMobile from '../../components/Partials/MenuMobile'
import Link from '../../components/Link';

class Home extends React.Component {

  render() {
    const canho = this.props.data.canho.value
    return (
      <div >
        {/*<MenuMobile />*/}
        <section className="inner-page">
          <div className="container">
            <div className="row">

              <div className="col-lg-9 col-sm-8 content-row shadow bg-white" style={{paddingTop: 15}}>
                <div className="row">
                  <div className="col-sm-4">
                    <img src={canho.coverUrl} alt={canho.title} />
                  </div>
                  <div className="col-sm-8" style={{textAlign: 'center', fontSize: 20}}>
                    <div style={{marginTop: 20}}>
                      Giá bán: <b style={{color: '#FF4136'}}>{canho.price2 || canho.price2 || 'Liên hệ  '}</b>
                    </div>
                    <div style={{marginTop: 20}}>
                      Được đánh giá: {canho.rating} <i style={{color: 'yellow'}} className="fa fa-star" />
                    </div>
                    <div style={{marginTop: 20}}>
                      <input type="radio" name="gender" value="1"/> 1 <i style={{color: 'yellow'}} className="fa fa-star" />
                      <input type="radio" name="gender" value="2"/> 2 <i style={{color: 'yellow'}} className="fa fa-star" />
                      <input type="radio" name="gender" value="3"/> 3 <i style={{color: 'yellow'}} className="fa fa-star" />
                      <input type="radio" name="gender" value="4"/> 4 <i style={{color: 'yellow'}} className="fa fa-star" />
                      <input type="radio" name="gender" value="5"/> 5 <i style={{color: 'yellow'}} className="fa fa-star" />
                    </div>
                    <br/>
                    <button className="primary">Gửi đánh giá</button>
                  </div>
                </div>
                <hr/>
                <div className="row padding-20">
                  <h2>Thôngn tin căn hộ</h2>
                  <div dangerouslySetInnerHTML={{ __html: canho.body}} />
                </div>
              </div>
              <Aside />
            </div>
          </div>
        </section>

        <div className="container">
          <div className="row">
            <div className="row mar-top">
              <div className="headerWr">
                <header>
                  <h2 >THỦ TỤC PHÁP LÝ</h2>
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
