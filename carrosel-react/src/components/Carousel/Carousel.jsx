import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    return(
        <div>
            <Slider {...settings}>
                <div>
                    <h2>1</h2>
                </div>
                <div>
                    <h2>2</h2>
                </div>
                <div>
                    <h2>3</h2>
                </div>
                <div>
                    <h2>4</h2>
                </div>
                <div>
                    <h2>5</h2>
                </div>
                <div>
                    <h2>6</h2>
                </div>
            </Slider>
        </div>
    )
}

export default Carousel
