import React from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const ImageSlider = () => {
  
        let Settings ={
            dots: true,
            infinite: true,
            speed: 500,
            slideToShow: 1,
            slideToScroll: 1,
            autoplay: true,
            arrows: true
        }


  return (
    <Carousel {...Settings}>
      <Wrap>
        <img src="/images/man-with-covidkit.jpg" alt=""/>
      </Wrap>
      <Wrap>
        <img src="/images/doctor.jpg" alt=""/>
      </Wrap>
      {/* {/* <Wrap>
        <img src="/images/slider-scale.jpg" alt=""/>
      </Wrap> */}
    </Carousel>
  )
}

export default ImageSlider



const Carousel = styled(Slider)`
    margin-top:20px;
    ul li button{
      &: before{
        font-size: 10px;
        color:rgb(150,158,171);
      }
    }


    .li.slick-active button::before{
      color:white;
    }

    
    .slick-list{
      overflow: visible;
    }

    .slick-next{ right:0!important; }
    .slick-prev{ left:0!important; }
    .slick-arrow{ z-index:2!important; }
  
    });
`

const Wrap = styled.div`
    img{
        cursor: pointer;
        border: 4px solid transparent;
        transition: 300ms;
        border-radius: 10px;
        margin:0 15px 0 17px;
        width:95vw;
        height:80vh;
        box-shadow: rgba(0 0 0 / 69%) 0px 26px 30px -10px,
        rgba(0 0 0 /50%) 0px 16px 20px -10px;
        
        &:hover{
          border: 4px solid rgba(249,249,249,0.8)
        }
    }
`