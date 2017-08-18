import React from 'react'
import axios from 'axios'
import LazyLoad from 'react-lazyload'

class Footer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: '',
        sdt: '',
        email: '',
        noidung: ''
      }
    }
  }

  render () {
    return (
      <div className="footer">
        <div className="a-left" >
          <LazyLoad>
            <img src="/imgs/leaf.png" alt=""/>
          </LazyLoad>
        </div>
        <div className="a-right" >
          <LazyLoad>
            <img src="/imgs/leaf.png" alt=""/>
          </LazyLoad>
        </div>
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-contact-info">
                  <h4 style={{textAlign: 'center', marginBottom: 20}}>thông tin liên hệ</h4>
                  <ul className="contact-items ng-scope" >
                    <li className="clearfix item ng-scope">
                      <div className="label ng-binding">Tư vấn</div>
                      <div className="text">
                        <b>0906.234.912 - 0972.564.695</b>
                      </div>
                    </li>
                    <li className="clearfix item ng-scope" >
                      <div className="label ng-binding">Địa chỉ giao dịch</div>
                      <div className="text">
                        <span className="ng-binding ng-scope">Sàn BĐS Vinhomes Times City Park Hill số 458 Minh Khai - Hai Bà Trưng - Hà Nội</span>
                      </div>
                    </li>
                    {/* <li className="clearfix item ng-scope" >
                      <div className="label ng-binding">Email</div>
                      <div className="text">
                        <a className="ng-binding ng-scope" href="mailto://quanganh268.vud@gmail.com">quanganh268.vud@gmail.com</a>
                      </div>
                    </li> */}
                  </ul>

                  <hr/>

                  {/*<div>*/}
                    {/*Tags :*/}
                    {/*<p style={{fontSize: 12, display: 'inline'}}> Căn hộ Vinhomes Times City, Vinhomes Times City, bán Vinhomes times city park hill, chung cư vinhomes times city,  mặt bằng Vinhomes times city, bán Căn hộ times city park hill, Vinhomes times city park hill, Căn hộ times city, giá bán căn hộ vinhomes times city, nội thất vinhomes times city, chính sách bán hàng vinhomes times city, Shophouse Vinhomes Times City Park Hill, Giá bán Vinhomes Times City Park Hill, Giá bán Vinhomes Time City, Bảng giá Vinhomes Times City, Vinhomes Times City Park Hill, Giá bán mới nhất Times City Park Hill, Căn hộ Times City Park Hill, Chung cư Times City Park Hill</p>*/}
                  {/*</div>*/}

                </div>
              </div>
              <div className="col-md-6">
                <div className="footer-contact-info">
                  <h4 style={{textAlign: 'center', marginBottom: 20}}>Đăng ký tư vấn miễn phí</h4>
                  <div className="agency-list">
                    <div className="footer-contact-form ng-pristine ng-scope ng-invalid ng-invalid-required ng-valid-email"   autoComplete="false">
                      <div className="row">
                        <div className="col-xs-12">
                          <input defaultValue={this.state.form.name}
                                 onChange={(e) => {
                                   let value = e.target.value
                                   this.setState(prev => {
                                     return {
                                       ...prev,
                                       form: {
                                         ...prev.form,
                                         name: value
                                       }
                                     }
                                   })
                                 }}
                                 type="text" placeholder="Họ & tên *" required autoComplete="false" name="name"  className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-6">
                          <input type="text"
                                 defaultValue={this.state.form.sdt}
                                 onChange={(e) => {
                                   let value = e.target.value
                                   this.setState(prev => {
                                     return {
                                       ...prev,
                                       form: {
                                         ...prev.form,
                                         sdt: value
                                       }
                                     }
                                   })
                                 }}
                                 placeholder="Số điện thoại*" required autoComplete="false" name="name"  className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" />
                        </div>
                        <div className="col-xs-6">
                          <input type="email"
                                 defaultValue={this.state.form.email}
                                 onChange={(e) => {
                                   let value = e.target.value
                                   this.setState(prev => {
                                     return {
                                       ...prev,
                                       form: {
                                         ...prev.form,
                                         email: value
                                       }
                                     }
                                   })
                                 }}
                                 placeholder="Email *" required autoComplete="false" name="email"  className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-email" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12">
                          <textarea placeholder="Nội dung *"
                                    defaultValue={this.state.form.noidung}
                                    onChange={(e) => {
                                      let value = e.target.value
                                      this.setState(prev => {
                                        return {
                                          ...prev,
                                          form: {
                                            ...prev.form,
                                            noidung: value
                                          }
                                        }
                                      })
                                      console.log(this.state.form)
                                    }}
                                    rows={3} required name="content" className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" />

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12 text-right">
                          <span className="btn-send" style={{cursor: 'pointer'}}
                            onClick={() => {
                              let that = this;
                              axios.post('/api/tuvan', this.state.form)
                                .then(res => {
                                  alert('Đã đăng ký tư vấn thành công, chúng tôi sẽ sớm liên lạc lại với bạn!')
                                  that.setState(prev => {
                                    return {
                                      form: {
                                        name: '',
                                        sdt: '',
                                        email: '',
                                        noidung: ''
                                      }
                                    }
                                  })
                                })
                                .catch(err => {
                                  console.log(err)
                                })
                            }}
                          >Gửi </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export {Footer as default}
