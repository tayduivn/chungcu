import React, { PropTypes } from 'react';
import Slider from './Slider'
import Aside from '../../components/Partials/Aside'
// import MenuMobile from '../../components/Partials/MenuMobile'
import Link from '../../components/Link';

class Home extends React.Component {

  render() {
    const chothue = this.props.data.chothue.value
    const muabankhut = this.props.data.muabankhut.value
    const muabanparkhill = this.props.data.muabanparkhill.value
    const thutuctrangchu = this.props.data.thutuctrangchu.value.slice(0, 4)
    const thutucAside = this.props.data.thutuctrangchu.value
    return (
      <div >
        {/*<MenuMobile />*/}
        <Slider />

        <div className="row" style={{marginTop: 30}}>
          <div className="container tongquan shadow bg-white">
            <div className="col-md-12">
              <h2 className="divider gradient" >Tổng quan dự án</h2>
            </div>
            <div className="col-md-8 padding-20" style={{paddingTop: '0 !important'}}>
                <div className="square">
                  <div className="square-content">
                    <img src="http://vinhomesluxury.net.vn/wp-content/uploads/2017/02/vinhomes-green-bay-cat.jpg" width="100%" height="100%" alt=""/>
                  </div>
                </div>
            </div>
            <div className="rol-md-4 padding-20" style={{fontWeight: 'bold'}}>
              <div className="noidung">
                <div className="wpb_wrapper">
                  <ul>
                    <li><strong>Tên dự án:&nbsp;</strong><span style={{color: '#003333'}}><strong style={{color: '#003333'}}><a style={{color: '#003333'}} href="http://vinhomesluxury.net.vn/">Vinhomes Green Bay – The Residenc</a>e</strong></span></li>
                    <li><strong>Vị trí:</strong>&nbsp;<span style={{color: '#003333'}}>Số 7 Đại lộ Thăng Long – Nam Từ Liêm – Hà Nội</span></li>
                    <li><strong>Chủ đầu tư:</strong>&nbsp;<span style={{color: '#003333'}}>Tập đoàn <strong>Vingroup</strong></span></li>
                    <li><strong>Quy mô dự án:</strong>&nbsp;<span style={{color: '#003333'}}>31,8 ha</span></li>
                  </ul>
                  <p><span style={{color: '#003333'}}>+&nbsp;Diện tích khuôn viên cây xanh: 26.429m2;</span><br />
                    <span style={{color: '#003333'}}>+ Diện tích&nbsp;hồ điều hòa: 80.028m2;</span><br />
                    <span style={{color: '#003333'}}>+ Đất trường mầm non: 4.365m2;</span><br />
                    <span style={{color: '#003333'}}>+ Diện trường tiểu học,trung học: 5.901m2;</span><br />
                    <span style={{color: '#003333'}}>+ Diện tích đất: 69.170m2;</span><br />
                    <span style={{color: '#003333'}}>+&nbsp;Diện tích nhà cao tầng: 16.413 m2;</span><br />
                    <span style={{color: '#003333'}}>+ Đất bãi đỗ xe: 1.900m2;</span></p>
                  <ul>
                    <li><strong>Sản phẩm:</strong><br />
                      <span style={{color: '#003333'}}>+ 180 lô liền kề, biệt thự.</span><br />
                      <span style={{color: '#003333'}}>+ 3 tòa căn hộ <strong>G1,G2,G3</strong> hơn 2000 căn hộ chung cư</span></li>
                    <li><strong>3 Phân khu:</strong> <span style={{color: '#003333'}}>Mộc Lan, Hoàng Lan, Thạch Thảo</span></li>
                    <li><strong>Thời điểm dự kiến bàn giao:</strong>&nbsp;<span style={{color: '#003333'}}>IV/ 2018</span></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        <section className="inner-page">
          <div className="container">
            <div className="row">

              <div className="col-lg-9 col-sm-8 content-row shadow bg-white" style={{paddingTop: 15}}>
                <div className="row" style={{marginBottom: '15px 0'}}>
                  <div className="headerWr" >
                    <header>
                      <h2>CĂN HỘ CHO THUÊ</h2>
                    </header>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  {chothue.map((el, index) => {
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

                <div className="row">
                  <div className="headerWr" >
                    <header>
                      <h2>CHUYỂN NHƯỢNG & THUÊ CĂN HỘ (KHU T)</h2>
                    </header>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  {muabankhut.map((el, index) => {
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

                <div className="row">
                  <div className="headerWr" >
                    <header>
                      <h2>CHUYỂN NHƯỢNG & THUÊ CĂN HỘ (KHU PARK HILL)</h2>
                    </header>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  {muabanparkhill.map((el, index) => {
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

        <div className="container">
          <div className="row">
            {/*TIn tuc*/}
            <div className="row mar-top">
              <div className="headerWr">
                <header>
                  <h2 >THỦ TỤC PHÁP LÝ</h2>
                </header>
              </div>
            </div>
            {/* /row */}
            <div className="row m-top-10">
              {thutuctrangchu.map((el, index) => {
                return (
                  <div key={index} className="col-lg-3 col-sm-4">
                    <div className="card">
                      <div className="card-image">
                        <Link to={'/thutuc/' + el.slug}>
                          <img className="img-responsive" src={el.coverUrl} alt={el.title} />
                        </Link>
                      </div>
                      <div className="card-content">
                        <div className="listingInfo">
                          <div className="vcard">
                            <h2><Link to={'/thutuc/' + el.slug} className="name">{el.title}</Link></h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /.card */}
                  </div>
                )
              })}
            </div>
            {/* /row */}
          </div>
        </div>
        {/*<section id="testimonial">*/}
          {/*<div className="container">*/}
            {/*<h3 className="head">*/}
              {/*Đánh Giá Về Chúng Tôi*/}
            {/*</h3>*/}
            {/*<div className="row">*/}
              {/*<div className="col-md-4 testimonialWr">*/}
                {/*<div className="row clearfix headWr">*/}
                  {/*<div className="avatarWr">*/}
                    {/*<img src="/imgs/avatar.png" alt=""/>*/}
                  {/*</div>*/}
                  {/*<div className="name">*/}
                    {/*Họ tên A*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="row danhgia">*/}
                  {/*"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div className="col-md-4">*/}
                {/*<div className="row clearfix headWr">*/}
                  {/*<div className="avatarWr">*/}
                    {/*<img src="/imgs/avatar.png" alt=""/>*/}
                  {/*</div>*/}
                  {/*<div className="name">*/}
                    {/*Họ tên A*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="row danhgia">*/}
                  {/*"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."*/}
                {/*</div>*/}
              {/*</div>*/}
              {/*<div className="col-md-4">*/}
                {/*<div className="row clearfix headWr">*/}
                  {/*<div className="avatarWr">*/}
                    {/*<img src="/imgs/avatar.png" alt=""/>*/}
                  {/*</div>*/}
                  {/*<div className="name">*/}
                    {/*Họ tên A*/}
                  {/*</div>*/}
                {/*</div>*/}
                {/*<div className="row danhgia">*/}
                  {/*"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."*/}
                {/*</div>*/}
              {/*</div>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</section>*/}
      </div>
  );
  }
}

export default Home
