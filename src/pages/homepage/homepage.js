import React, { useEffect } from 'react'
import './homepage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import getAllMovies from '../../store/actions/firestore'; 
import Header from '../../component/navbar/navbar';
import HereSection from '../../component/heroSection/heroSection';
import SliderComponent from '../../component/slider/slider';

function Homepage(type) {

  const movies = useSelector((state) => state.movies.movies);
  const dispatch = useDispatch();

  useEffect(()=>{

  },[movies])

  useEffect(() => {
    dispatch(getAllMovies('NetflixClone'));
  }, [])

  return (
    <>
    <Header></Header>
    <div className='hero block'>
    <HereSection></HereSection>
    </div>

    <div className="featured ">
    <SliderComponent></SliderComponent>
    </div> 
    </>
  );
}

export default Homepage
