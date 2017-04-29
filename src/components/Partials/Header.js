import React from 'react'
import Link from '../Link'

class Header extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
    <header>
      <div id="nav-wrap">
        <div className="nav-wrap-holder">
          <div className="container" id="nav_wrapper">
            <nav className="navbar navbar-static-top nav-white">
              <div className="navbar-header">
                <Link className="navbar-brand" to="/">
                  <img src="/imgs/logo.png" alt="logo" className="img-responsive" />
                </Link>
              </div>
              <div className="navbar2">
                <div className="navbar2-top letterpress">TỰ HÀO LÀ ĐƠN VỊ CHO THUÊ - CHUYỂN NHƯỢNG SỐ 1 TIME CITY</div>
                <div className="navbar2-bottom letterpress">Chuyên viên tư vấn: <b style={{color: '#FF851B'}}>0906.234.912 - 0972.564.695</b></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div id="menu2">

        <div id="container">
          <nav>
            <ul>
              <li><Link to="/">Trang chủ</Link></li>
              <li><Link to="/danhsach/cho-thue">Căn hộ cho thuê</Link>
              </li>
              <li><Link to="/danhsach/khu-t">Thuê & chuyển nhượng khu T</Link></li>
              <li><Link to="/danhsach/khu-pack-hill">Thuê & chuyển nhượng khu Park Hill</Link></li>
              <li><Link to="/danhsachthutuc">Thủ tục pháp lý</Link></li>
            </ul>
          </nav>
        </div>
      </div>

    </header>
    )
  }
}

export {Header as default}
