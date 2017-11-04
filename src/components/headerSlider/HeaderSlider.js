import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slides from './asserts';

const HeaderSlider = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const renderSlides = () => {
        return slides.map((el, index) => {
            return (
                <div key={index}>
                    <img src={el}/>
                </div>
            );
        });
    }

    return (
      <Slider {...settings}>
        { renderSlides() }
      </Slider>
    );
}
export default HeaderSlider;
