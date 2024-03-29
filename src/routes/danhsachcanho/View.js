import React, { PropTypes } from 'react';
import Aside from '../../components/Partials/Aside'
// import MenuMobile from '../../components/Partials/MenuMobile'
import Link from '../../components/Link';
import LazyLoad from 'react-lazyload'

class Home extends React.Component {

  render() {
    const danhsachcanho = this.props.data.danhsachcanho.value
    const thutucAside = this.props.data.danhsachthutuc.value
    return (
      <div >
        {/*<MenuMobile />*/}
        <section className="inner-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-sm-8 content-row shadow bg-white" style={{paddingTop: 15}}>
                <div className="row" style={{marginBottom: 15, padding: 15}} dangerouslySetInnerHTML={{ __html: this.props.data.gioithieu.value.body || '' }} />
                <div className="row" style={{marginBottom: 15}}>
                  <div className="headerWr" >
                    <header>
                      <h2>Danh sách các căn hộ</h2>
                    </header>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  {danhsachcanho.map((el, index) => {
                    if(el)
                      return (
                        <div key={index} className="col-sm-6 col-lg-4">
                          <div className="card">
                            <Link to={'/can-ho/' + el.slug + '#menu2'}>
                              <div className="card-image imgWr">
                                <LazyLoad>
                                  <img className="img-responsive" src={el.coverUrl} alt={el.title} />
                                </LazyLoad>
                              </div>
                            </Link>
                            <div className="card-content">
                              <div className="listingInfo">
                                <figure className="listerName">
                                  <Link to={'/can-ho/' + el.slug + '#menu2'} className="agent-wrapper">
                                    <LazyLoad>
                                      <img className="agent-photo" src="/imgs/icon_new.gif" width={29} height={19} alt="new icon" />
                                    </LazyLoad>
                                  </Link>
                                </figure>
                                <div className="propertyStats">
                                  {!el.price2 && !el.price1 && <span className="lienhe">Liên hệ</span>}
                                  {(!el.price2 && el.price1) ? (<span className="curPrice"><b>{el.price1.toLocaleString()} VNĐ</b></span>) : ''}
                                  {(el.price2 && el.price1) ? (<span className="curPrice"><span className="oldprice" style={{textDecoration: 'line-through'}} >{el.price1.toLocaleString()}</span> <b>{el.price2.toLocaleString()} VNĐ</b></span>) : ""}
                                </div>
                                <div className="vcard">
                                  <h2><Link to={'/can-ho/' + el.slug + '#menu2'} className="name align-center">{el.title}</Link></h2>
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


