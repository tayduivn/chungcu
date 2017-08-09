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
                <div className="navbar2-top letterpress">TỰ HÀO LÀ ĐƠN VỊ CHO THUÊ - CHUYỂN NHƯỢNG SỐ 1 TIMES CITY</div>
                <div className="navbar2-bottom letterpress">Chuyên viên tư vấn: <b style={{color: '#FF851B'}}>0972.564.695 - 0906.234.912</b></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    )
  }
}

export {Header as default}
