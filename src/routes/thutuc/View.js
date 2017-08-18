import React, { PropTypes } from 'react';
import Aside from '../../components/Partials/Aside'
import Link from '../../components/Link';
import LazyLoad from 'react-lazyload'

class Home extends React.Component {

  render() {
    const thutuc = this.props.data.thutuc.value
    const thutucAside = this.props.data.danhsachthutuc.value
    const thutuctuongtu = this.props.data.thutuctuongtu.value
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
                <div className="row responsive">
                  <div style={{padding: 15}}
                    dangerouslySetInnerHTML={{__html: thutuc.body}} />
                </div>

                <div className="row" style={{marginBottom: '15px 0'}}>
                  <div className="headerWr" >
                    <header>
                      <h2>Các thủ tục khác</h2>
                    </header>
                  </div>
                </div>
                <hr/>
                <div className="row responsive">
                  <div>
                    {thutuctuongtu.map((el, index) => {
                      return (
                        <div key={index} className="col-lg-6 col-sm-6">
                          <div className="card">
                            <div className="card-image imgWr">
                              <Link to={'/thutuc/' + el.slug + '#menu2'}>
                                <LazyLoad>
                                  <img className="img-responsive" src={el.coverUrl} alt={el.title} />
                                </LazyLoad>
                              </Link>
                            </div>
                            <div className="card-content">
                              <div className="listingInfo">
                                <div className="vcard">
                                  <h2><Link to={'/thutuc/' + el.slug + '#menu2'} className="name">{el.title}</Link></h2>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* /.card */}
                        </div>
                      )
                    })}
                  </div>
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


