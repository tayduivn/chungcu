import React, { PropTypes } from 'react';
import Aside from '../../components/Partials/Aside'
import Link from '../../components/Link';

class Home extends React.Component {

  render() {
    console.log(this.props)
    const danhsachthutuc = this.props.data.danhsachthutuc.value
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
                      <h2>Thủ tục pháp lý</h2>
                    </header>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="tab-pane fade active in" id="personalAds">
                    {danhsachthutuc.map((el, index) => {
                      return (
                        <div key={index} className="card card-horizontal">
                          <div className="row">
                            <div className="col-sm-4">
                              <div className="card-image bg-image">
                                <Link to={'/thutuc/' + el.slug}>
                                  <img src={el.coverUrl} width="100%" height="100%" alt=""/>
                                </Link>
                              </div>
                            </div>
                            {/* /col 4 */}
                            <div className="col-sm-8">
                              <div className="card-content">
                                <div className="listingInfo">
                                  <div className="vcard">
                                    <h2><Link to={'/thutuc/' + el.slug} className="name">{el.title}</Link></h2>
                                    <p className="listingLocation"><i className="fa fa-map-o" />
                                      {el.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* /col 8 */}
                          </div>
                          {/* /inner row */}
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


