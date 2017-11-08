import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeaderSlider.css';

const HeaderSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };

    const renderSlides = () => {
        return [0,1,2,3,4,5,6,7,8].map((el, index) => {
            return (
                <div key={index}>
                    <div className='img-container' style={{ backgroundImage: `url('./asserts/${index}.jpg')` }}></div>
                </div>
            );
        });
    }

    return (
      <Slider className='header-slider' {...settings}>
        { renderSlides() }
      </Slider>
    );
}
export default HeaderSlider;
