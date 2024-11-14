import React from 'react'
import banImg from '../assets/banner.png'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px",
              position: "absolute",
              left: "50px",
              top: "50%",
              transform: "translateY(-50%)"
            }}
          >
            <ul style={{ margin: "0px" }}> {dots} </ul>
          </div>
        ),
        customPaging: i => (
          <div
            style={{
              width: "30px",
              color: "#262626",
              borderRight: "5px solid white",
              padding: "15px 0",
              opacity: "0"
            }}
          >
            0{i + 1}
          </div>
        )
      };
  return (
    <div>
        <Slider {...settings}>
            <div className="">
               <Link to="/shop">
                <img src={banImg} alt="" />
               </Link>
            </div>
            <div className="">
              <Link to="/shop">
                  <img src={banImg} alt="" />
              </Link>
            </div>
            <div className="">
              <Link to="/shop">
                  <img src={banImg} alt="" />
              </Link>
            </div>
        </Slider>
    </div>
  )
}

export default Banner
