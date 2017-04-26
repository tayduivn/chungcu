import React from 'react'
import Link from '../Link'

class Aside extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <aside className="col-lg-3 col-sm-4 sidebar">
        <div className="widget widget-subscribe panel media pad-all" style={{padding: '0 !important'}}>
          <div className="newsletter">
            <h4 style={{textAlign: 'center', background: '#00303a', color: 'white', fontWeight: 'bold', margin: '0 !important', padding: '5px 0', marginBottom: 10}}>
              CHUYÊN VIÊN TƯ VẤN
            </h4>
            <div className="row" style={{textAlign: 'center', fontWeight: 'bold', marginTop: 10, fontSize: 14}}>
              PHÙNG ĐẠI QUANG
            </div>
            <div className="row" style={{padding: '5px 5px !important'}}>
              <div className="col-sm-12" style={{paddingTop: 0}}>
                <div style={{textAlign: 'center'}}><b style={{color: '#FF4136', fontSize: 24}}>0968 146 839</b></div>
                <div style={{fontSize: 13, textAlign: 'center'}}>quanganh268.vud@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget shadow">
          <ul className="accordion">
            <li className="accordion-header">CHUYÊN MỤC</li>
            <li className="accordion-item">TRANG CHỦ</li>
            <li className="accordion-item">
              <Link to="/danhsach/cho-thue">CĂN HỘ CHO THUÊ</Link>
            </li>
            <li className="accordion-item" >MUA BÁN VÀ CHUYỂN NHƯỢNG</li>
            <li className="accordion-sub-item" >
              <Link to='/danhsach/khu-t'>Khu T</Link>
            </li>
            <li className="accordion-sub-item" >
              <Link to='/danhsach/khu-t'>Khu Park Hill</Link></li>
            <li className="accordion-item">THỦ TỤC PHÁP LÝ</li>
          </ul>
        </div>

      </aside>
    )
  }
}

export {Aside as default}
