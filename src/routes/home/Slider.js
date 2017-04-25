import React from 'react'
import Slider from 'react-slick'


class View extends React.Component {
  constructor(props){
    super(props)

  }
  render() {
    var settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      swipeToSlide: false
    };
    return (
      <Slider {...settings} className="slider-top">
        <div>
          <div className="ratio">
            <img className="image-ratio image-ratio--1350-450" src="/imgs/1.jpg" alt=""/>
          </div>
        </div>
        <div>
          <div className="ratio">
            <img className="image-ratio image-ratio--1350-450" src="/imgs/2.jpg" alt=""/>
          </div>
        </div>
        <div>
          <div className="ratio">
            <img className="image-ratio image-ratio--1350-450" src="/imgs/3.jpg" alt=""/>
          </div>
        </div>
        <div>
          <div className="ratio">
            <img className="image-ratio image-ratio--1350-450" src="/imgs/4.jpg" alt=""/>
          </div>
        </div>
      </Slider>
    )
  }
}

export {View as default}
