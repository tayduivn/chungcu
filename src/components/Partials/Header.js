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
                {/* Brand and toggle get grouped for better mobile display */}
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Navbar">
                    <span className="sr-only">
                      Toggle navigation
                    </span>
                    <span className="icon-bar">
                    </span>
                    <span className="icon-bar">
                    </span>
                    <span className="icon-bar">
                    </span>
                  </button>
                  <Link className="navbar-brand" to="/">
                    <img src="/imgs/logo.png" alt="logo" className="img-responsive" />
                  </Link>
                </div>
                {/* Collect the nav links, forms, and other content for toggling */}
                <div className="collapse navbar-collapse" id="Navbar">
                  {/* regular link */}
                  <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown active">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        <i className="ti-home">
                        </i> Home
                        <span className="caret">
                        </span>
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a href="index-map.html">
                            With map
                          </a>
                        </li>
                        <li>
                          <a href="index.html">
                            Carousel slider
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        <i className=" ti-clipboard">
                        </i> Pages
                        <span className="caret">
                        </span>
                      </a>
                      <ul className="dropdown-menu" role="menu">
                        <li>
                          <a href="agent_profile.html">
                            Agent Profile
                          </a>
                        </li>
                        <li>
                          <a href="results.html">
                            Search Results
                          </a>
                        </li>
                        <li>
                          <a href="results_grid.html">
                            Results options
                          </a>
                        </li>
                        <li>
                          <a href="details.html">
                            Property Details
                          </a>
                        </li>
                        <li>
                          <a href="search_users.html">Search Users</a>
                        </li>
                        <li>
                          <a href="sumbit.html">
                            Sumbit Property
                          </a>
                        </li>
                        <li>
                          <a href="pricing.html">
                            Pricing
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="results.html">
                        <i className=" ti-list-ol">
                        </i> Categories
                      </a>
                    </li>
                    <li>
                      <a href="contact.html">
                        <i className="ti-email">
                        </i> Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          {/* /.div nav wrap holder */}
        </div>
        {/* /#nav wrap */}
      </header>
    )
  }
}

export {Header as default}
