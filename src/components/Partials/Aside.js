import React from 'react'
import Link from '../Link'

class Aside extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    const thutuc = this.props.thutuc || []
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

        <div className="widget widget-subscribe panel media pad-all" style={{padding: '0 !important'}}>
          <div className="newsletter">
            <h4 style={{textAlign: 'center', background: '#00303a', color: 'white', fontWeight: 'bold', margin: '0 !important', padding: '5px 0', marginBottom: 10}}>
              Bản đồ
            </h4>
            <div>
              <img src="/imgs/bando2.jpg" height="auto" width="100%" alt=""/>
            </div>
          </div>
        </div>

        <div className="widget widget-subscribe panel media pad-all" style={{padding: '0 !important'}}>
          <div className="newsletter">
            <h4 style={{textAlign: 'center', background: '#00303a', color: 'white', fontWeight: 'bold', margin: '0 !important', padding: '5px 0', marginBottom: 10}}>
              Thủ tục pháp lý
            </h4>
            <div>
              <ul id="thutuc-aside">
                {thutuc.map((el,index) => {
                  return (
                  <li key={index}>
                    <Link to={'/thutuc/' + el.slug}>{el.title}</Link>
                  </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

      </aside>
    )
  }
}

export {Aside as default}
