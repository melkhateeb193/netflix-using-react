import React, { useEffect } from 'react'
import './homepage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import getAllMovies from '../../store/actions/firestore'; 
import Header from '../../component/navbar/navbar';
import HereSection from '../../component/heroSection/heroSection';
import SliderProgress from '../../component/slider/slider';
import Footer from '../../component/footer/footer';

function Homepage(type) {

  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(()=>{
    // console.log(movies);
    // movies.forEach(movie => {
    //   console.log(movie.data());
    // });
  },[movies])

  useEffect(() => {
    dispatch(getAllMovies('NetflixClone'));
  }, [])

  return (
    <>
      <Header />
      <HereSection />
      <div className='slider-progress'>
      <SliderProgress title={"New pupliched"} />
      <SliderProgress title={"New relase"} />
      <SliderProgress title={" top 10"} />
      </div>
    
      <Footer />
    </>
  );
}

export default Homepage
