import React from 'react'
import Link from '../Link'
import YouTube from 'react-youtube'

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
              Nguyễn Văn Chung
            </div>
            <div className="row" style={{padding: '5px 5px !important'}}>
              <div className="col-sm-12" style={{paddingTop: 0}}>
                <div style={{textAlign: 'center'}}><b style={{color: '#FF4136', fontSize: 24}}>0972.564.695</b></div>
                <div style={{textAlign: 'center'}}><b style={{color: '#FF4136', fontSize: 24}}>0906.234.912</b></div>
              </div>
            </div>
          </div>
        </div>

        <div className="widget widget-subscribe panel media pad-all" style={{padding: '0 !important', cursor: 'pointer'}}
        >
          <div className="newsletter">
            <div>
              <YouTube
                videoId="-yylfXD4maM"
              />
            </div>
          </div>
        </div>

        <div className="widget widget-subscribe panel media pad-all" style={{padding: '0 !important'}}>
          <img src="/imgs/aside2.jpg" alt="aside1" style={{width: '100%', height: 'auto'}} />
        </div>

        <div className="widget widget-subscribe panel media pad-all" style={{padding: '0 !important'}}>
          <img src="/imgs/aside1.jpg" alt="aside1" style={{width: '100%', height: 'auto'}} />
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
