import React, { PropTypes } from 'react';
import Aside from '../../components/Partials/Aside'
// import MenuMobile from '../../components/Partials/MenuMobile'
import Link from '../../components/Link';
import axios from 'axios'

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      rate: 5,
      currentRate: null,
      rated: false
    }
  }

  changeRate(num){
    this.setState(prev => {
      return {
        ...prev,
        rate: num
      }
    })
  }

  sendRating(){
    axios.post('/api/rating', {
      slug: this.props.data.canho.value.slug,
      rate: this.state.rate
    })
      .then(res => {
        this.setState(prev => {
          return {
            ...prev,
            currentRate: res.data.rating,
            rated: true
          }
        })
      })
      .catch(err => {
        alert('Có lỗi')
      })
  }

  render() {
    const canho = this.props.data.canho.value
    const thutucAside = this.props.data.danhsachthutuc.value
    const canhotuongtu = this.props.data.canhotuongtu.value
    console.log('============')
    console.log(canhotuongtu)
    return (
      <div >
        {/*<MenuMobile />*/}
        <section className="inner-page">
          <div className="container">
            <div className="row">

              <div className="col-lg-9 col-sm-8 content-row shadow bg-white" style={{paddingTop: 15}}>
                <div className="row">
                  <div className="col-sm-4">
                    <img height="auto" width="100%" src={canho.coverUrl} alt={canho.title} />
                  </div>
                  <div className="col-sm-8" style={{textAlign: 'center', fontSize: 20}}>
                    <div className="propertyStats">
                      {!canho.price2 && !canho.price1 && <span className="lienhe">Liên hệ</span>}
                      {(!canho.price2 && canho.price1) ? (<span className="curPrice"><b>{canho.price1.toLocaleString()} VNĐ</b></span>) : ''}
                      {(canho.price2 && canho.price1) ? (<span className="curPrice"><span className="oldprice" style={{textDecoration: 'line-through'}} >{canho.price1.toLocaleString()}</span> <b>{canho.price2.toLocaleString()} VNĐ</b></span>) : ""}
                    </div>
                    <div style={{marginTop: 20}}>
                      Đang được đánh giá: {this.state.currentRate || canho.rating} <i style={{color: 'yellow'}} className="fa fa-star" />
                    </div>
                    { !this.state.rated && <div style={{marginTop: 20}}>
                      <input type="radio" name="gender" value="1" checked={this.state.rate === 1}
                             onChange={() => this.changeRate(1)}
                      /> 1 <i style={{color: 'yellow'}} className="fa fa-star" />
                      <input type="radio" name="gender" value="2" checked={this.state.rate === 2}
                             onChange={() => this.changeRate(2)}
                      /> 2 <i style={{color: 'yellow'}} className="fa fa-star" />
                      <input type="radio" name="gender" value="3" checked={this.state.rate === 3}
                             onChange={() => this.changeRate(3)}
                      /> 3 <i style={{color: 'yellow'}} className="fa fa-star" />
                      <input type="radio" name="gender" value="4" checked={this.state.rate === 4}
                             onChange={() => this.changeRate(4)}
                      /> 4 <i style={{color: 'yellow'}} className="fa fa-star" />
                      <input type="radio" name="gender" value="5" checked={this.state.rate === 5}
                             onChange={() => this.changeRate(5)}
                      /> 5 <i style={{color: 'yellow'}} className="fa fa-star" />
                    </div> }

                    {this.state.rated && <div style={{marginTop: 20}}>
                      Bạn đã đánh giá căn hộ này {this.state.rate} <i style={{color: 'yellow'}} className="fa fa-star" />
                    </div>}

                    <br/>
                    {!this.state.rated && <button type="button"
                            onClick={() => this.sendRating()}
                            className="btn btn-primary">Gửi đánh giá</button> }
                  </div>
                </div>
                <hr/>
                <div className="row padding-20 responsive">
                  <h2>Thông tin căn hộ</h2>
                  <div dangerouslySetInnerHTML={{ __html: canho.body}} />
                </div>
                <div className="row padding-20 responsive">
                  <h2>Căn hộ tương tự</h2>
                  <div>
                    {canhotuongtu.map((el, index) => {
                    if(el)
                      return (
                        <div key={index} className="col-sm-6 col-lg-6">
                          <div className="card">
                            <Link to={'/can-ho/' + el.slug}>
                              <div className="card-image imgWr">
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
                                  {!el.price2 && !el.price1 && <span className="lienhe">Liên hệ</span>}
                                  {(!el.price2 && el.price1) ? (<span className="curPrice"><b>{el.price1.toLocaleString()} VNĐ</b></span>) : ''}
                                  {(el.price2 && el.price1) ? (<span className="curPrice"><span className="oldprice" style={{textDecoration: 'line-through'}} >{el.price1.toLocaleString()}</span> <b>{el.price2.toLocaleString()} VNĐ</b></span>) : ""}
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
