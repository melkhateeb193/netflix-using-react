import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../slider/slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function SliderComponent() {
  var settings = {
    className: "center",
    infinite: true,
    centerPadding: "10px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function(index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };
  return (
    <Container fluid className='p-5'>
      <h1>What to watch</h1>
      <Row>
      <Slider {...settings}>
        <Col className='custom-col'>
          {/* Slide 1 */}
          <Card className='Card' style={{ width: '16.5rem'}}>
            <Card.Img  variant="top" src="https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg" />
            {/* <Card.Img  variant="top" src="/public/images/anime images/commi-can't-communicate.jpg" /> */}
            <Card.Body className='cardbody bg-dark'>
              <div className='d-flex'>
                <div className='d-flex'>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlus} />    
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ffffff",}} />   
              </span>
              </div>
              <span className='icon-container me-2 '>
              <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /> 
                </span>
              </div>
              <Card.Title className='text-white mt-2'>98% match</Card.Title>
             <div className='mt-2'>
              <span className='Age text-white border border-1 me-1'>18+</span>
              <span className='Age text-white'>number of episodes</span>
             </div>
              <span className='Age text-white'>Genre</span>
            </Card.Body>
          </Card>
        </Col>
        <Col className='custom-col'>
          {/* Slide 1 */}
          <Card className='Card' style={{ width: '16.5rem'}}>
            <Card.Img  variant="top" src="https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg" />
            {/* <Card.Img  variant="top" src="/public/images/anime images/commi-can't-communicate.jpg" /> */}
            <Card.Body className='cardbody bg-dark'>
              <div className='d-flex'>
                <div className='d-flex'>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlus} />    
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ffffff",}} />   
              </span>
              </div>
              <span className='icon-container me-2 '>
              <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /> 
                </span>
              </div>
              <Card.Title className='text-white mt-2'>98% match</Card.Title>
             <div className='mt-2'>
              <span className='Age text-white border border-1 me-1'>18+</span>
              <span className='Age text-white'>number of episodes</span>
             </div>
              <span className='Age text-white'>Genre</span>
            </Card.Body>
          </Card>
        </Col>
        <Col className='custom-col'>
          {/* Slide 1 */}
          <Card className='Card' style={{ width: '16.5rem'}}>
            <Card.Img  variant="top" src="https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg" />
            {/* <Card.Img  variant="top" src="/public/images/anime images/commi-can't-communicate.jpg" /> */}
            <Card.Body className='cardbody bg-dark'>
              <div className='d-flex'>
                <div className='d-flex'>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlus} />    
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ffffff",}} />   
              </span>
              </div>
              <span className='icon-container me-2 '>
              <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /> 
                </span>
              </div>
              <Card.Title className='text-white mt-2'>98% match</Card.Title>
             <div className='mt-2'>
              <span className='Age text-white border border-1 me-1'>18+</span>
              <span className='Age text-white'>number of episodes</span>
             </div>
              <span className='Age text-white'>Genre</span>
            </Card.Body>
          </Card>
        </Col>
        <Col className='custom-col'>
          {/* Slide 1 */}
          <Card className='Card' style={{ width: '16.5rem'}}>
            <Card.Img  variant="top" src="https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg" />
            {/* <Card.Img  variant="top" src="/public/images/anime images/commi-can't-communicate.jpg" /> */}
            <Card.Body className='cardbody bg-dark'>
              <div className='d-flex'>
                <div className='d-flex'>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlus} />    
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ffffff",}} />   
              </span>
              </div>
              <span className='icon-container me-2 '>
              <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /> 
                </span>
              </div>
              <Card.Title className='text-white mt-2'>98% match</Card.Title>
             <div className='mt-2'>
              <span className='Age text-white border border-1 me-1'>18+</span>
              <span className='Age text-white'>number of episodes</span>
             </div>
              <span className='Age text-white'>Genre</span>
            </Card.Body>
          </Card>
        </Col>
        <Col className='custom-col'>
          {/* Slide 1 */}
          <Card className='Card' style={{ width: '16.5rem'}}>
            <Card.Img  variant="top" src="https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg" />
            {/* <Card.Img  variant="top" src="/public/images/anime images/commi-can't-communicate.jpg" /> */}
            <Card.Body className='cardbody bg-dark'>
              <div className='d-flex'>
                <div className='d-flex'>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlus} />    
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ffffff",}} />   
              </span>
              </div>
              <span className='icon-container me-2 '>
              <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /> 
                </span>
              </div>
              <Card.Title className='text-white mt-2'>98% match</Card.Title>
             <div className='mt-2'>
              <span className='Age text-white border border-1 me-1'>18+</span>
              <span className='Age text-white'>number of episodes</span>
             </div>
              <span className='Age text-white'>Genre</span>
            </Card.Body>
          </Card>
        </Col>
        <Col className='custom-col'>
          {/* Slide 1 */}
          <Card className='Card' style={{ width: '16.5rem'}}>
            <Card.Img  variant="top" src="https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg" />
            {/* <Card.Img  variant="top" src="/public/images/anime images/commi-can't-communicate.jpg" /> */}
            <Card.Body className='cardbody bg-dark'>
              <div className='d-flex'>
                <div className='d-flex'>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlus} />    
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ffffff",}} />   
              </span>
              </div>
              <span className='icon-container me-2 '>
              <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /> 
                </span>
              </div>
              <Card.Title className='text-white mt-2'>98% match</Card.Title>
             <div className='mt-2'>
              <span className='Age text-white border border-1 me-1'>18+</span>
              <span className='Age text-white'>number of episodes</span>
             </div>
              <span className='Age text-white'>Genre</span>
            </Card.Body>
          </Card>
        </Col>
        <Col className='custom-col'>
          {/* Slide 1 */}
          <Card className='Card' style={{ width: '16.5rem'}}>
            <Card.Img  variant="top" src="https://www.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-586719869.jpg" />
            {/* <Card.Img  variant="top" src="/public/images/anime images/commi-can't-communicate.jpg" /> */}
            <Card.Body className='cardbody bg-dark'>
              <div className='d-flex'>
                <div className='d-flex'>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faPlus} />    
              </span>
              <span className='icon-container me-2'>
              <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ffffff",}} />   
              </span>
              </div>
              <span className='icon-container me-2 '>
              <FontAwesomeIcon icon={faChevronDown} style={{color: "#ffffff",}} /> 
                </span>
              </div>
              <Card.Title className='text-white mt-2'>98% match</Card.Title>
             <div className='mt-2'>
              <span className='Age text-white border border-1 me-1'>18+</span>
              <span className='Age text-white'>number of episodes</span>
             </div>
              <span className='Age text-white'>Genre</span>
            </Card.Body>
          </Card>
        </Col>
      
      </Slider>
      </Row>
    </Container>
  );
}

export default SliderComponent;

















// export default class Responsive extends Component {
//   render() {



    
//     var settings = {
//       dots: true,
//       infinite: false,
//       speed: 500,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       initialSlide: 0,

//       responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//     };
//     return (
//       <div className="container bg-warning">
//         <h2> What to watch </h2>
//         <Slider {...settings}>
//           {[1,2,3,4,5,6,7,8,9,10].map((items,index)=>{return   <div className="" key={index}>{items}</div>})}
//           <div></div>
//           {/* <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//           <div>
//             <h3>7</h3>
//           </div>
//           <div>
//             <h3>8</h3>
//           </div> */}
//         </Slider>
//       </div>
//     );
//   }
// }


