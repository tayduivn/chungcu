import React from 'react'

class Footer extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <div className="footer">
        <div className="a-left" >
          <img src="/imgs/leaf.png" alt=""/>
        </div>
        <div className="a-right" >
          <img src="/imgs/leaf.png" alt=""/>
        </div>
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-contact-info">
                  <h4>thông tin liên hệ</h4>
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
                    <li className="clearfix item ng-scope" >
                      <div className="label ng-binding">Email</div>
                      <div className="text">
                        <a className="ng-binding ng-scope" href="mailto://quanganh268.vud@gmail.com">quanganh268.vud@gmail.com</a>
                      </div>
                    </li>
                  </ul>
                </div>
                <form className="footer-contact-form ng-pristine ng-scope ng-invalid ng-invalid-required ng-valid-email"   autoComplete="false">

                  <div className="row">
                    <div className="col-xs-6">
                      <input type="text" placeholder="Họ & tên *" required autoComplete="false" name="name"  className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" />
                    </div>
                    <div className="col-xs-6">
                      <input type="email" placeholder="Email *" required autoComplete="false" name="email"  className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-email" />

                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12">
                      <textarea placeholder="Nội dung *" rows={3} required name="content" className="ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required" defaultValue={""} />

                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-12 text-right"><button className="btn-send" type="submit">Gửi </button></div>

                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className="footer-contact-info">
                  <h4>Các đơn vị phân phối chính thức</h4>
                  <div className="agency-list">
                    <div className="agency">
                      <div className="a-name">CÔNG TY CỔ PHẦN KINH DOANH VÀ PHÁT TRIỂN ĐỊA ỐC VIETSTARLAND</div>
                      <div className="a-fone">0964 668 888</div>
                    </div>
                    <div className="agency">
                      <div className="a-name">Công ty Cổ phần đầu tư phát triển thương mại Tân Thời Đại</div>
                      <div className="a-fone">0982 334 488</div>
                    </div>
                    <div className="agency">
                      <div className="a-name">Công ty TNHH Phát triển Thương mại Bất Động Sản NEWSTARLAND</div>
                      <div className="a-fone">0917 032 888</div>
                    </div>
                    <div className="agency">
                      <div className="a-name">Công ty CPTM và Dịch Vụ Bất Động Sản Queen Land</div>
                      <div className="a-fone">0967 87 69 69</div>
                    </div>
                    <div className="agency">
                      <div className="a-name">CÔNG TY CỔ PHẦN ĐẦU TƯ ĐỊA ỐC BIGHOMES</div>
                      <div className="a-fone">1800 0018</div>
                    </div>
                    <div className="agency">
                      <div className="a-name">Công ty Cổ phần Dịch vụ Bất động sản V-Land</div>
                      <div className="a-fone">0169 866 5555</div>
                    </div>
                    <div className="agency">
                      <div className="a-name">Công ty cổ phần bất động sản Phúc Lộc</div>
                      <div className="a-fone">0888 236 888</div>
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
