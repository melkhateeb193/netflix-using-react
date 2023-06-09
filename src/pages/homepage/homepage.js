import React, { useEffect } from 'react'
import './homepage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import getAllMovies from '../../store/actions/firestore';
import Header from '../../component/navbar/navbar';
import HereSection from '../../component/heroSection/heroSection';
import SliderProgress from '../../component/slider/slider';
import Footer from '../../component/footer/footer';
import changeMovies from '../../store/actions/moviedb';
import { Spinner } from 'react-bootstrap';

function Homepage(type) {
  // const loader = useSelector((state) => state.loader);
  // console.log(loader);

  const movies = useSelector((state) => state.moviesdb.movies);
  let newMoviesPass = [];
  const dispatch = useDispatch();
  function halve(arr, index) {
    return arr.filter((i, idx) => idx < index)
  }
  useEffect(() => {
    console.log(movies);

    // movies.forEach(movie => {
    //   console.log(movie.data());
    // });
  }, [movies])
  newMoviesPass = halve(movies, 12);
  useEffect(() => {
    // dispatch(getAllMovies('NetflixClone'));
    // dispatch(changeMovies(`/movie/popular`));
  }, [])

  return (
    <> 
    
      <Header />
      <HereSection />
      <div className='main-sliders'>
        <div className='slider-progress'>
          <SliderProgress movies={newMoviesPass} title={'Suspenseful TV Sci-Fi & Fantasy'} />
        </div>
        <div className='slider-progress'>
          <SliderProgress movies={newMoviesPass} title={'Trending Now'} />
        </div>
        <div className='slider-progress'>
          <SliderProgress movies={newMoviesPass} title={'K-Dramas'} />
        </div>
        <div className='slider-progress'>
          <SliderProgress movies={newMoviesPass} title={'New Releases'} />
        </div>
        <div className='slider-progress'>
          <SliderProgress movies={newMoviesPass} title={'Imaginative Fantasy TV'} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Homepage
