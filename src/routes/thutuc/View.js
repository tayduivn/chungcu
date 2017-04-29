import React, { PropTypes } from 'react';
import Aside from '../../components/Partials/Aside'
import Link from '../../components/Link';

class Home extends React.Component {

  render() {
    const thutuc = this.props.data.thutuc.value
    const thutucAside = this.props.data.danhsachthutuc.value
    return (
      <div >
        {/*<MenuMobile />*/}
        <section className="inner-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-sm-8 content-row shadow bg-white" style={{paddingTop: 15}}>
                <div className="row" style={{marginBottom: '15px 0'}}>
                  <div className="headerWr" >
                    <header>
                      <h2>{thutuc.title}</h2>
                    </header>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div style={{padding: 15}}
                    dangerouslySetInnerHTML={{__html: thutuc.body}} />
                </div>
              </div>
              <Aside thutuc={thutucAside} />
            </div>
          </div>
        </section>

      </div>
  );
  }
}

export default Home


