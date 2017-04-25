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
                <div><b style={{color: 'red', fontSize: 13}}>0968 146 839</b></div>
                <div style={{fontSize: 12}}>email@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="widget">
          <ul className="accordion">
            <li className="accordion-header">CĂN HỘ TIMES CITY</li>
            <li className="accordion-item">CĂN HỘ TIMES CITY</li>
            <li className="accordion-item">CĂN HỘ SÂN VƯỜN PARK HILL (TẦNG 2)</li>
            <li className="accordion-item drop">SỐ PHÒNG NGỦ</li>
            <li className="accordion-sub-item">CĂN HỘ 01 NGỦ</li>
            <li className="accordion-sub-item">CĂN HỘ 02 NGỦ</li>
            <li className="accordion-sub-item">CĂN HỘ 03 NGỦ</li>
            <li className="accordion-sub-item">CĂN HỘ 04 NGỦ</li>
            <li className="accordion-item">HƯỚNG BAN CÔNG</li>
            <li className="accordion-sub-item">BC HƯỚNG ĐÔNG</li>
            <li className="accordion-sub-item">BC HƯỚNG TÂY</li>
            <li className="accordion-sub-item">BC HƯỚNG NAM</li>
            <li className="accordion-sub-item">BC HƯỚNG BẮC</li>
            <li className="accordion-item">HƯỚNG CỬA</li>
            <li className="accordion-sub-item">HƯỚNG ĐÔNG</li>
            <li className="accordion-sub-item">HƯỚNG TÂY</li>
            <li className="accordion-sub-item">HƯỚNG NAM</li>
            <li className="accordion-sub-item">HƯỚNG BẮC</li>
            <li className="accordion-item">KHOẢNG TẦNG</li>
            <li className="accordion-sub-item">TẦNG 3 - TẦNG 10</li>
            <li className="accordion-sub-item">TẦNG 11 - TẦNG 20</li>
            <li className="accordion-sub-item">TẦNG 21 TRỞ LÊN</li>
            <li className="accordion-item">PARK HILL</li>
            <li className="accordion-sub-item">PARK 1 (28T)</li>
            <li className="accordion-sub-item">PARK 2 (34T) *</li>
            <li className="accordion-sub-item">PARK 3 (34T) *</li>
            <li className="accordion-sub-item">PARK 5 (35T) *</li>
            <li className="accordion-sub-item">PARK 6 (35T)</li>
            <li className="accordion-sub-item">PARK 7 (35T)</li>
            <li className="accordion-sub-item">PARK 8 (28T) *</li>
            <li className="accordion-item">PARK HILL PREMIUM</li>
            <li className="accordion-sub-item">PARK HILL 9 (34T) *</li>
            <li className="accordion-sub-item">PARK HILL 10 (34T) *</li>
            <li className="accordion-sub-item">PARK HILL 11 (34T) *</li>
            <li className="accordion-sub-item">PARK HILL 12 (34T) *</li>
            <li className="accordion-item">TÒA T1 - T11</li>
            <li className="accordion-sub-item">TÒA T1 & T4 (27T) *</li>
            <li className="accordion-sub-item">TÒA T2 & T3 (31T) *</li>
            <li className="accordion-sub-item">TÒA T5 - T6 -  T7 (27T)</li>
            <li className="accordion-sub-item">TÒA T8 - T9 (32 T)</li>
            <li className="accordion-sub-item">TÒA T10 (27 T)</li>
            <li className="accordion-sub-item">TÒA T11 (27 T)</li>
            <li className="accordion-sub-item">TÒA T18 (35T)</li>
          </ul>
        </div>

      </aside>
    )
  }
}

export {Aside as default}
