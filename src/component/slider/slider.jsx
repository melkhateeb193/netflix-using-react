import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "react-bootstrap/Card";
import { PropaneSharp } from "@mui/icons-material";
import "./slider.css";

const Responsive = (props) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };

  return (
    <div className="container-fluid px-5 py-3 SliderContainer">
      <div className="SliderContainer">
        <h3>{props.title}</h3>
      </div>
      <Slider {...settings}>
        <div className="slider__element">
          <Card className="slider__element--child">
            <Card.Img
              variant="top"
              src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c"
            />
          </Card>
        </div>
        <div className="slider__element">
          <Card className="slider__element--child">
            <Card.Img
              variant="top"
              src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c"
            />
          </Card>
        </div>
        <div className="slider__element">
          <Card className="slider__element--child">
            <Card.Img
              variant="top"
              src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c"
            />
          </Card>
        </div>
        <div className="slider__element">
          <Card className="slider__element--child">
            <Card.Img
              variant="top"
              src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c"
            />
          </Card>
        </div>
        <div className="slider__element">
          <Card className="slider__element--child">
            <Card.Img
              variant="top"
              src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c"
            />
          </Card>
        </div>
        <div className="slider__element">
          <Card className="slider__element--child">
            <Card.Img
              variant="top"
              src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c"
            />
          </Card>
        </div>
        <div className="slider__element">
          <Card className="slider__element--child">
            <Card.Img
              variant="top"
              src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c"
            />
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default Responsive;
