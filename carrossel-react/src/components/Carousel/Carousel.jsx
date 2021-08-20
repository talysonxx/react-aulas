import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'
import rukaImg from '../../img/ruka-2.jpg'

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        accessibility: true,
        adaptiveHeight: true,
        arrows: true,
        useCSS: true,
      }
    return(
        <div>
            <Slider {...settings} style={styleSlider}>
                <DivElementCarousel>
                    <ImgCarousel src={rukaImg}/>
                </DivElementCarousel>
                <DivElementCarousel>
                    <ImgCarousel src={rukaImg}/>
                </DivElementCarousel>
                <DivElementCarousel>
                    <ImgCarousel src={rukaImg}/>
                </DivElementCarousel>
            </Slider>
        </div>
    )
}

// style css
const styleSlider = {
    height: '300px',
    width: '35vw',
    backgroundColor: 'red',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingTop: '5px'
}

const DivElementCarousel = styled.div`
    border: 1px solid transparent;
    height: 60%;
`
const ImgCarousel = styled.img`
    width: 85%;
    margin: 0 auto;
`

export default Carousel
