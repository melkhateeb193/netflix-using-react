import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from 'react-bootstrap/Card';


const Responsive = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 6,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <div className="container-fluid p-5 ">
      <h2>Responsive</h2>
      <Slider {...settings}>
        <div style={{ margin: '0 5px' }}>
          <Card style={{ width: '15.5rem' }}>
            <Card.Img variant="top" src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c" />
          </Card>
        </div>
        <div style={{ margin: '0 5px' }}>
          <Card style={{ width: '15.5rem' }}>
            <Card.Img variant="top" src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c" />
          </Card>
        </div>
        <div style={{ margin: '0 5px' }}>
          <Card style={{ width: '15.5rem' }}>
            <Card.Img variant="top" src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c" />
          </Card>
        </div>
        <div style={{ margin: '0 5px' }}>
          <Card style={{ width: '15.5rem' }}>
            <Card.Img variant="top" src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c" />
          </Card>
        </div>
        <div style={{ margin: '0 5px' }}>
          <Card style={{ width: '15.5rem' }}>
            <Card.Img variant="top" src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c" />
          </Card>
        </div>
        <div style={{ margin: '0 5px' }}>
          <Card style={{ width: '15.5rem' }}>
            <Card.Img variant="top" src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c" />
          </Card>
        </div>
        <div style={{ margin: '0 5px' }}>
          <Card style={{ width: '15.5rem' }}>
            <Card.Img variant="top" src="http://occ-0-6661-55.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMUFn_qx4wIfV8BL5FfRORBtxn9xZduOUYHpID0GPRUPkxlQl-MSCWXLYzNiIhTbQIiu4fjJhbFJOpgxmmeskNzuhAJXWNPfKU.webp?r=c6c" />
          </Card>
        </div>
      </Slider>
    </div>
  );
};

export default Responsive;
