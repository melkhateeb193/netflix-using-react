import React, { useEffect } from 'react'
import Header from '../../component/navbar/navbar'
import Footer from '../../component/footer/footer'
import { useDispatch, useSelector } from 'react-redux';
import getAllMovies from '../../store/actions/firestore'; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../component/slider/slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import HereSection from '../../component/heroSection/heroSection';
export default function Moovies() {
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
  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();
  useEffect(() => {  
  }, [movies]); 
  useEffect(() => {
    dispatch(getAllMovies("NetflixClone"));
  }, []);
  return (
   <>
   <Header></Header>
<HereSection></HereSection>
   <Container fluid className='p-5 m-5'>
      <h1>What to watch</h1>
      
      <Row>
      <Slider {...settings}>
      {movies.map((movie) => (
        <Col key={movie.id} className='custom-col'> 
          <Card className='Card' style={{ width: '16.5rem'}}>
            <Card.Img  variant="top" src={movie.data().link ? movie.data().link : movie.data().Link} /> 
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
        ))}
        </Slider>
      </Row>
    </Container>

   <Footer></Footer>
   </>
  )
}
