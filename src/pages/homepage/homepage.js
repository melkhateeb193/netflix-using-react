import React, { useEffect } from 'react'
import './homepage.scss'
import { useDispatch, useSelector } from 'react-redux';
import getAllMovies from '../../store/actions/firestore';  
import Header from '../../component/navbar/navbar';
import Footer from '../../component/footer/footer';
import HereSection from '../../component/heroSection/heroSection';

function Homepage() {

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
    <HereSection></HereSection>
   
    <Footer></Footer>
    </>
  );
}

export default Homepage
