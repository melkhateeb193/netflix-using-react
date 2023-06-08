import './myList.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import getAllMovies from '../../store/actions/firestore';
import changeMovies from '../../store/actions/moviedb';

function MyList() {
    // const movies = useSelector((state) => state.movies.movies);
    // const dispatch = useDispatch();

    // useEffect(()=>{
    //   // console.log(movies);
    //   movies.forEach(movie => {
    //     console.log(movie.data());
    //   });
    // },[movies])
  
    // useEffect(() => {
    //   dispatch(getAllMovies('NetflixClone'));
    // }, [])
    
    const [page, setPage] = useState(1);
    const moviesdb = useSelector((state) => state.moviedb.movies);
    console.log(moviesdb);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(changeMovies(`/movie/popular?page=${page}`));
    }, [page])
    
    return (
        <>
            <div className='container-fluid'>
                <div className='list-body px-5 mt-4'>
                    <p className='my-list'>My List</p>
                    <Row xs={6} md={6} className="main-design g-2  pt-4">
                        {moviesdb.map((movie, idx) => (
                            <Col key={idx}>
                                <Card className='card-design'>
                                    <Card.Img className='card-img' variant="top" src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} />
                                    
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    )
}

export default MyList
