import React, { PropTypes } from 'react';
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
        <div className="row" style={{marginTop: 30}}>
          <div className="container tongquan shadow bg-white">
            <div className="col-md-12">
              <h2 className="divider gradient" >Tổng quan dự án</h2>
            </div>
            <div className="col-md-12 padding-20">
                <img src="/imgs/bando.jpg" width="100%" height="auto" alt=""/>
            </div>
            <div className="col-md-5 padding-20" style={{fontWeight: 'bold', paddingTop: '0 !important'}}>
              <div className="noidung">
                <div className="wpb_wrapper"><div className="cms-heading-wrapper heading-default ">
                  <div className="cms-heading-inner">
                    <div className="cms-heading-content">
                      <h3 className="title" style={{color: '#000000'}}>TỔNG QUAN DỰ ÁN<span>.</span></h3>
                    </div>
                  </div>
                </div>
                  <div className="wpb_text_column wpb_content_element ">
                    <div className="wpb_wrapper">
                      <ul>
                        <li><span style={{color: '#000000'}}><strong>Tên dự án:&nbsp;</strong><strong style={{color: '#003333'}}><a style={{color: '#000000'}} href="http://vinhomesluxury.net.vn/">Vinhomes&nbsp;</a>Times City Park Hill</strong></span></li>
                        <li><span style={{color: '#000000'}}><strong>Vị trí:</strong>&nbsp;Số 458 Minh Khai&nbsp;– Hai Bà Trưng – Hà Nội</span></li>
                        <li><span style={{color: '#000000'}}><strong>Chủ đầu tư:</strong>&nbsp;Tập đoàn <strong>Vingroup</strong></span></li>
                        <li><span style={{color: '#000000'}}><strong>Quy mô dự án:</strong>&nbsp;36 ha</span></li>
                      </ul>
                      <p><span style={{color: '#000000'}}>&nbsp;Diện tích khuôn viên cây xanh: 100.000m2</span></p>
                      <ul>
                        <li><span style={{color: '#000000'}}><strong>Sản phẩm:</strong></span><br />
                          <span style={{color: '#000000'}}>+ 10 lô liền kề, biệt thự.</span><br />
                          <span style={{color: '#000000'}}>+ 23 tòa với&nbsp;hơn 12000 căn hộ chung cư</span></li>
                        <li><span style={{color: '#000000'}}><strong>3 Phân khu:</strong>&nbsp;Times City, Park Hill, Park Hill Premium</span></li>
                      </ul>
                      <h4><span style={{color: '#000000'}}><strong>TIỆN ÍCH SỐNG:</strong></span></h4>
                      <ul>
                        <li><span style={{color: '#000000'}}>Khu cảnh quan nước và các khu vườn</span></li>
                        <li><span style={{color: '#000000'}}>Khu&nbsp;quảng trường trung tâm</span></li>
                        <li><span style={{color: '#000000'}}>Khu hoạt động BBQ, picnic và bể bơi</span></li>
                        <li><span style={{color: '#000000'}}>Khu&nbsp;thể thao và vườn sinh thái</span></li>
                        <li><span style={{color: '#000000'}}>Phố đi dạo và mua sắm…</span></li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-md-7 padding-20" style={{}}>
              <div className="square">
                <div className="square-content">
                  <img src="/imgs/phoicanh.jpg" width="100%" height="100%" alt=""/>
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

                <div className="row">
                  <div className="headerWr" >
                    <header>
                      <h2>CHUYỂN NHƯỢNG CĂN HỘ KHU T</h2>
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

                <div className="row">
                  <div className="headerWr" >
                    <header>
                      <h2>CHUYỂN NHƯỢNG CĂN HỘ KHU PARK HILL</h2>
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
