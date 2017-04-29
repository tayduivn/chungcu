import React, { PropTypes } from 'react';
import Aside from '../../components/Partials/Aside'
// import MenuMobile from '../../components/Partials/MenuMobile'
import Link from '../../components/Link';

class Home extends React.Component {

  render() {
    console.log(this.props)
    const danhsachcanho = this.props.data.danhsachcanho.value
    const thutucAside = this.props.data.danhsachthutuc.value
    return (
      <div >
        {/*<MenuMobile />*/}
        <section className="inner-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-sm-8 content-row shadow bg-white" style={{paddingTop: 15}}>
                <div className="row" style={{marginBottom: '15px 0'}}>
                  <div className="headerWr" >
                    <header>
                      <h2>{this.props.headerName}</h2>
                    </header>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  {danhsachcanho.map((el, index) => {
                    return (
                      <div key={index} className="col-sm-6 col-lg-4">
                        <div className="card">
                          <Link to={'/can-ho/' + el.slug}>
                            <div className="card-image">
                              <img className="img-responsive" src={el.coverUrl} alt={el.title} />
                            </div>
                          </Link>
                          <div className="card-content">
                            <div className="listingInfo">
                              <figure className="listerName">
                                <Link to={'/can-ho/' + el.slug} className="agent-wrapper">
                                  <img className="agent-photo" src="/imgs/icon_new.gif" width={29} height={19} alt="new icon" />
                                </Link>
                              </figure>
                              <div className="propertyStats">
                                <p className="priceText">{el.price1 || el.price2 || 'Liên hệ'} {el.price1 + el.price2 > 0 ? "VNĐ" : ""}</p>
                              </div>
                              <div className="vcard">
                                <h2><Link to={'/can-ho/' + el.slug} className="name align-center">{el.title}</Link></h2>
                              </div>
                            </div>
                          </div>

                          <div className="card-action">
                            <b>Đánh giá :</b><span style={{margin: '0 5px'}}>{el.rating} </span> <i style={{color: 'yellow'}} className="fa fa-star" />
                          </div>

                        </div>
                      </div>
                    )
                  })}

                </div>
              </div>
              <Aside thutuc={thutucAside} />
            </div>
          </div>
        </section>

      </div>
  );
  }
}

export default Home


