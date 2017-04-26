import React from 'react'

class Aside extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <aside className="col-sm-3 sidebar">
        <div className="widget widget-subscribe panel media pad-all" style={{padding: '0 !important'}}>
          <div className="newsletter">
            <h4 style={{textAlign: 'center', background: '#228dcb', color: 'white', margin: '0 !important', padding: '5px 0', marginBottom: 10}}>
              PHÙNG ĐẠI QUANG
            </h4>
            <div className="row" style={{padding: '20px 5px !important'}}>
              <div className="col-sm-6">
                <div style={{borderRadius: '100%'}}>
                  <img src="/imgs/avatar.jpg" alt="Anh dai dien" style={{width: '100%', height: 'auto', borderRadius: '100%'}} />
                </div>
              </div>
              <div className="col-sm-6" style={{paddingTop: 10}}>
                <div><b style={{color: '#FF4136', fontSize: 13}}>0968 146 839</b></div>
                <div style={{fontSize: 12}}>email@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget">
          <aside className="side_menu">
            <ul className="level1">
              <li>
                <a href="tim-kiem?hang=Volkswagen&id=7">SHOP HOUSE</a>
              </li>
              <li><a href="tim-kiem?hang=Mitsubishi&id=8">CĂN HỘ SÂN VƯỜN PARK HILL</a></li>
              <li><a href="tim-kiem?hang=Toyota&id=9">Toyota</a></li>
              <li><a href="tim-kiem?hang=Nissan&id=10">Nissan</a></li>
              <li><a href="tim-kiem?hang=Mercedes-Benz&id=11">Mercedes-Benz</a></li>
              <li><a href="tim-kiem?hang=Mazda&id=12">Mazda</a></li>
              <li><a href="tim-kiem?hang=Kia&id=13">Kia</a></li>
              <li><a href="tim-kiem?hang=Honda&id=14">Honda</a></li>
              <li><a href="tim-kiem?hang=Ford&id=15">Ford</a></li>
              <li><a href="tim-kiem?hang=Deawoo&id=16">Deawoo</a></li>
              <li><a href="tim-kiem?hang=Chevrolet&id=17">Chevrolet</a></li>
              <li><a href="tim-kiem?hang=Hyundai&id=18">Hyundai</a></li>
              <li><a href="tim-kiem?hang=Suzuki&id=19">Suzuki</a></li>
            </ul>
          </aside>
        </div>

      </aside>
    )
  }
}

export {Aside as default}
