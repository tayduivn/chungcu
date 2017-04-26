import React from 'react'

class MenuMobile extends React.Component {

  componentDidMount(){
    if(process.env.BROWSER) {
      var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menuMobile'),
        'padding': 256,
        'tolerance': 70
      })
      slideout.open();
    }
  }

  render () {
    return (
      <div>
        <nav id="menuMobile">
          <header>
            <h2>Menu</h2>
          </header>
        </nav>

        <main id="panel">
          <header>
            <h2>Panel</h2>
          </header>
        </main>
      </div>
    );
  }
}


export {MenuMobile as default}
